import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { toggleTagPopover, createNewTag, optimisticTagCreate } from '../actions/actions';



class CreateTagPopover extends Component {

  componentWillMount() {
    this.setState({
      tagName: '',
      userFocusedTagName: false
    })
  }

  handleChange(event) {
    this.setState({
      tagName: event.target.value
    })
  }

  handleSave() {
    this.props.createNewTag(this.state.tagName);
  }

  showErrorForTagName() {
    if(! this.state.userFocusedTagName) {
      return false;
    }
    return this.state.tagName == '';
  }

  render() {
    return (
        <div className="tag-popover">
          <h4>New Tag</h4>
          <div className={
            this.showErrorForTagName() ? 'form-group has-error' : 'form-group'
          }>
          <input className="form-control" type="text" placeholder="Tag name" 
                 value={this.state.tagName}
                 onChange={this.handleChange.bind(this)} 
                 onBlur={() => this.setState({['userFocusedTagName']: true})}/>
          </div>
          <hr/>
          <button className="btn btn-danger"
                  onClick={() => {
                    this.props.toggleTagPopover(false);
                  }}>
            Cancel
          </button>
          <button className="btn btn-success"
                  onClick={this.handleSave.bind(this)}
                  disabled={this.state.tagName == ''}
          >
            Save
          </button>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTagPopover: (isActive) => {
      dispatch(toggleTagPopover(isActive));
    },
    createNewTag: (tagName) => {
      dispatch(optimisticTagCreate(tagName));
      dispatch(createNewTag(tagName));
      dispatch(toggleTagPopover(false))
    },
  };
}

export default connect(null, mapDispatchToProps)(CreateTagPopover);