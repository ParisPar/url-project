import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TagItem from '../components/TagItem';
import { fetchTags } from '../actions/actions';

class TagList extends Component {
  componentWillMount() {
    this.props.fetchTags();
  }

  renderTags() {
    return (
      this.props.tags.map((tag) => {
        return (
          <TagItem key={tag.id}
                   name={tag.name}
          />
        )
      })
    )
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="tag-list">
          <h2>TAGS<a href=""><i className="fa fa-plus"></i></a></h2>
          <hr />
          <ul>
            <li><a href="#"><i className="fa fa-tags"></i>All Tags</a></li>
            {this.renderTags()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({tags}) {
  return {
    tags
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTags}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
