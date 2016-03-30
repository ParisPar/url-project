import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TagPopover from '../components/TagPopover';
import { editTag } from '../actions/actions';
import { connect } from 'react-redux';

class EditTag extends Component {

  componentWillMount() {
    this.setState({
      tagName: this.props.name,
      tagId: this.props.id,
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
    this.props.editTag({
      id: this.state.tagId,
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
      top: '45px',
      right: '-74px'
    };

    return (
      <TagPopover styles={styles}
                  handleClose={this.props.handleClose}
                  handleSubmit={this.handleSubmit.bind(this)}>

        <h4>Edit Tag</h4>

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
    editTag: (tag) => {
      dispatch(editTag(tag));
    }
  };
}

export default connect(null, mapDispatchToProps)(EditTag);