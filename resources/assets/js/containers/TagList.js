import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TagItem from '../components/TagItem';
import { fetchTags, clearTagFilters, toggleTagPopover } from '../actions/actions';
import CreateTagPopover from '../components/CreateTagPopover';

class TagList extends Component {

  componentDidMount() {
    console.log('Tag List component mounted!');
  }

  componentWillReceiveProps() {
    console.log('Tag List component receiving new props!');
  }

  componentWillUpdate() {
    console.log('Tag List component will update!');
  }

  componentDidUpdate() {
    console.log('Tag List component updated!');
  }

  componentWillUnmount() {
    console.log('Tag List component will unmount!');
  }

  renderTags() {
    // console.log('Running renderTags', this.props.tags);
    return (
      this.props.tags.map((tag) => {
        return (
          <TagItem key={tag.id}
                   id={tag.id}
                   active={tag.active}
                   name={tag.name}
          />
        )
      })
    )
  }

  tooglePopover() {
    this.props.toggleTagPopover(!this.props.tagPopoverIsActive);
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="tag-list">
          <h2>
            TAGS
            <i className="fa fa-plus"
               onClick={this.tooglePopover.bind(this)}></i>
            {(() => {
              if(this.props.tagPopoverIsActive){
                return (
                  
                  <CreateTagPopover />
                  
                );
              }
            })()}   
          </h2>

          <hr />
          <ul>
            <li onClick={(e) => {
              e.preventDefault();
              this.props.clearTagFilters();
            }}>
              <a href="#"><i className="fa fa-tags"></i>All Tags</a>
            </li>
            {this.renderTags()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({tags, tagPopoverIsActive}) {
  return {
    tags,
    tagPopoverIsActive,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => {
      dispatch(fetchTags());
    },
    clearTagFilters: () => {
      dispatch(clearTagFilters());
    },
    toggleTagPopover: (isActive) => {
      dispatch(toggleTagPopover(isActive));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TagList);
