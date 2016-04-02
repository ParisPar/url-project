import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TagPopover from '../components/TagPopover';
import { createTag } from '../actions/actions';
import { connect } from 'react-redux';

class CreateTag extends Component {

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
  
  handleSubmit(event) {
    event.stopPropagation();
    this.props.createTag({
      name: this.state.tagName
    })
  }

  showErrorForTagName() {
    if(! this.state.userFocusedTagName) {
      return false;
    }
    return this.state.tagName == '';
  }

  render() {
    const styles = {
      top: '57px',
      right: '-65px'
    };

    return (
      <TagPopover styles={styles}
                  handleClose={this.props.handleClose}
                  handleSubmit={this.handleSubmit.bind(this)}>

        <h4>Create Tag</h4>

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
                onClick={this.props.handleClose}>
          Cancel
        </button>
        <button className="btn btn-success"
                onClick={this.handleSubmit.bind(this)}
        >
          Save
        </button>
      </TagPopover>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTag: (tag) => {
      dispatch(createTag(tag));
    }
  };
}

export default connect(null, mapDispatchToProps)(CreateTag);