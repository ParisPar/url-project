import React, { Component } from 'react';
// The only use case for bindActionCreators is when you
// want to pass some action creators down to a component
// that isn’t aware of Redux, and you don’t want to pass
// dispatch or the Redux store to it.
import { connect } from 'react-redux';
import { addTagFilter, removeTagFilter } from '../actions/actions';
import EditTag from '../containers/EditTag';
import DeleteTag from '../containers/DeleteTag';


class TagItem extends Component {

  componentWillMount() {

    // If the array of active tag filter contains the 
    // id of the tag received set the li as active
    this.setState({
      isActive: false,
      tagPopoverIsActive: false,
      editTagIsActive: false,
      deletaTagIsActive: false
    });
  }

  openEditTagPopover(event) {
    event.stopPropagation();
    this.setState({
      ['editTagIsActive']: true
    })
  }

  closeEditTagPopover(event) {
    event.stopPropagation();
    this.setState({
      ['editTagIsActive']: false
    })
  }

  openDeleteTagPopover(event) {
    event.stopPropagation();
    this.setState({
      ['deleteTagIsActive']: true
    })
  }

  closeDeleteTagPopover(event) {
    event.stopPropagation();
    this.setState({
      ['deleteTagIsActive']: false
    })
  }

  render() {
    if(this.props.tagFilters) {
      this.state.isActive = this.props.tagFilters.includes(this.props.id) ? true : false;
    }

    let className = '';
    if(this.state.isActive) {
      className += ' active';
    }
    if(this.state.deleteTagIsActive || this.state.editTagIsActive) {
      className += ' popover-active';
    }

    return (
      <li className={className}
          onClick={(e) => {
            if(! this.state.isActive) {
              e.preventDefault();
              this.props.addTagFilter(this.props.id);
            } else {
              e.preventDefault();
              this.props.removeTagFilter(this.props.id);
            }
          }}>
        <a href="#">

          <i className="fa fa-tag"></i>{this.props.name}
          
          <i className="fa fa-pencil"
             onClick={this.openEditTagPopover.bind(this)}></i>

          <i className="fa fa-trash-o"
             onClick={this.openDeleteTagPopover.bind(this)}></i>

          {this.state.editTagIsActive ? 
            <EditTag handleClose={this.closeEditTagPopover.bind(this)} 
                     name={this.props.name}
                     id={this.props.id}
          /> : null}

          {this.state.deleteTagIsActive ? 
            <DeleteTag handleClose={this.closeDeleteTagPopover.bind(this)} 
                       name={this.props.name}
                       id={this.props.id}
          /> : null}

        </a>
      </li>
    )
  }
  
}

function mapStateToProps({tagFilters}) {
  return {
    tagFilters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTagFilter: (tagId) => {
      dispatch(addTagFilter(tagId));
    },
    removeTagFilter: (tagId) => {
      dispatch(removeTagFilter(tagId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagItem);