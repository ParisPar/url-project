import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TagItem from '../components/TagItem';
import { fetchTags, clearTagFilters } from '../actions/actions';
import CreateTag from '../containers/CreateTag';

class TagList extends Component {

  componentWillMount() {
    this.setState({
      createTagIsActive: false
    })
  }

  componentDidMount() {
    console.log('Tag List component mounted!');
  }

  componentWillReceiveProps() {
    // console.log('Tag List component receiving new props!');
  }

  componentWillUpdate() {
    console.log('Tag List component will update!');
  }

  componentDidUpdate() {
    console.log('Tag List component updated!');
  }

  componentWillUnmount() {
    // console.log('Tag List component will unmount!');
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

  openCreateTagPopover(event) {
    event.stopPropagation();
    this.setState({
      ['createTagIsActive']: true
    })
  }

  closeCreateTagPopover(event) {
    event.stopPropagation();
    this.setState({
      ['createTagIsActive']: false
    })
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="tag-list">
          <h2>
            TAGS
            <i className="fa fa-plus"
               onClick={this.openCreateTagPopover.bind(this)}></i>

            {this.state.createTagIsActive ? 
              <CreateTag handleClose={this.closeCreateTagPopover.bind(this)} 
                         name={this.props.name}
                         id={this.props.id}
            /> : null}

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
    tags
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => {
      dispatch(fetchTags());
    },
    clearTagFilters: () => {
      dispatch(clearTagFilters());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TagList);
