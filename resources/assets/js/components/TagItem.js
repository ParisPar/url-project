import React from 'react';
// The only use case for bindActionCreators is when you
// want to pass some action creators down to a component
// that isn’t aware of Redux, and you don’t want to pass
// dispatch or the Redux store to it.
import { connect } from 'react-redux';
import { addTagFilter, removeTagFilter } from '../actions/actions';


function TagItem(props) {

  // If the array of active tag filter contains the 
  // id of the tag received set the li as active
  let isActive = false;
  if(props.tagFilters) {
    isActive = props.tagFilters.includes(props.id) ? true : false;
  }

  return (
    <li className={isActive ? "active" : ""}
        onClick={(e) => {
          if(! isActive) {
            e.preventDefault();
            props.addTagFilter(props.id);
          } else {
            e.preventDefault();
            props.removeTagFilter(props.id);
          }
        }}>
      <a href="#">
        <i className="fa fa-tag"></i>{props.name}
        {(() => {
          if(isActive) {
            return (
              <i className="fa fa-check"></i>
            )
          }
        })()}
      </a>
    </li>
  )
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