import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchFilter } from '../actions/actions';

class SearchBar extends Component {
  dispatchSearchFilterAction(event) {
    console.log('Entered dispatchSearchFilterAction', event.target.value, this.props);
    this.props.setSearchFilter(event.target.value);
  }

  render() {
    return (
      <div className="col-md-9">
        <div id="search-box-custom">
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
          <input type="search" 
                 placeholder="Search Links..." 
                 onChange={this.dispatchSearchFilterAction.bind(this)}
          />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSearchFilter: (searchTerm) => {
      dispatch(setSearchFilter(searchTerm));
    }
  };
}


export default connect(null, mapDispatchToProps)(SearchBar);
