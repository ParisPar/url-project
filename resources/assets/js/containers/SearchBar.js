import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  render() {
    return (
      <div className="col-md-9">
        <div id="search-box-custom">
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
          <input type="search" placeholder="Search Links..." />
        </div>
      </div>
    )
  }
}

export default connect()(SearchBar);
