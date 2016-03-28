import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import TagList from '../containers/TagList';
import LinkList from '../containers/LinkList';
import CreateLinkModal from '../components/CreateLinkModal';
import { connect } from 'react-redux';
import { fetchTags, fetchLinks } from '../actions/actions';
import toastr from 'toastr';
import { Link } from 'react-router';

class App extends Component {

  componentDidUpdate() {
    console.log('App component updated!');
  }
  
  componentWillMount() {
    console.log('App component will mount!');
    this.props.fetchTags();
    this.props.fetchLinks();
  }

  render() {
    //let linkModal = this.props.children && React.cloneElement(this.props.children);
    return (
      <div>
        <div className="row">
          <div className="col-sm-3">
            <Link to="/home/new" id="new-button" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              New Link
            </Link>
            {this.props.children}
          </div>
          <SearchBar />
          <div className="col-sm-2">
          <a id="export-button"
             className="btn btn-primary"
             href="/links/export"
             ><i className="fa fa-file-pdf-o"></i>Export To PDF</a>
          </div>
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