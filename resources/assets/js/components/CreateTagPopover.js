import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTagPopover, createNewTag, optimisticTagCreate } from '../actions/actions';



class CreateTagPopover extends Component {
  handleSave() {
    this.props.createNewTag(this.textInput.value);
    this.props.toggleTagPopover(! this.props.tagPopoverIsActive);
  }

  render() {
    return (
        <div className="tag-popover">
          <h4>New Tag</h4>
          <input className="form-control" type="text" placeholder="Tag name" 
                 ref={(ref) => this.textInput = ref} />
          <hr/>
          <button className="btn btn-danger"
                  onClick={() => {
                    this.props.toggleTagPopover(! this.props.tagPopoverIsActive);
                  }}>
            Cancel
          </button>
          <button className="btn btn-success"
                  onClick={this.handleSave.bind(this)}
          >
            Save
          </button>
        </div>
    )
  }
}

function mapStateToProps({tagPopoverIsActive}) {
  return {
    tagPopoverIsActive
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTagPopover);