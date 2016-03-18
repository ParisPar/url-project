import React from 'react';
import SearchBar from '../containers/SearchBar';
import TagList from '../containers/TagList';
import LinkList from '../containers/LinkList';

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <button id="new-button" className="btn btn-primary"><i className="fa fa-plus"></i>New Link</button>
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