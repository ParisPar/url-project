import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TagPopover from '../components/TagPopover';
import { deleteTag } from '../actions/actions';
import { connect } from 'react-redux';

export default class DeleteTag extends Component {
  
  handleSubmit(event) {
    event.stopPropagation();
    this.props.deleteTag({
      id: this.props.id,
    })
  }

  render() {
    const styles = {
      top: '45px',
      right: '-53px'
    };

    return (
      <TagPopover styles={styles}
                  handleClose={this.props.handleClose}
                  handleSubmit={this.handleSubmit.bind(this)}>
        <h4>Delete Tag?</h4>

        <p><strong>Name: </strong><br/>{this.props.name}</p>

        <hr/>
        <button className="btn btn-default"
                onClick={this.props.handleClose}>
          No
        </button>
        <button className="btn btn-danger"
                onClick={this.handleSubmit.bind(this)}
        >
          Yes
        </button>
      </TagPopover>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTag: (tag) => {
      dispatch(deleteTag(tag));
    }
  };
}

export default connect(null, mapDispatchToProps)(DeleteTag);