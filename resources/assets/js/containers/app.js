import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import TagList from '../containers/TagList';
import LinkList from '../containers/LinkList';
import { connect } from 'react-redux';
import { fetchTags, fetchLinks } from '../actions/actions';

class App extends Component {
  
  componentWillMount() {
    this.props.fetchTags();
    this.props.fetchLinks();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <a href="#modal"id="new-button" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              New Link
            </a>
          </div>
          <SearchBar />
        </div>
        <div className="row links-main">
          <TagList />
          <LinkList />
        </div>   
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => {
      dispatch(fetchTags());
    },
    fetchLinks: () => {
      dispatch(fetchLinks());
    }
  };
}

export default connect(null, mapDispatchToProps)(App);