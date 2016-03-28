import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchFilter } from '../actions/actions';

class SearchBar extends Component {
  componentDidMount() {
    console.log('Search Bar component mounted!');
  }

  componentWillReceiveProps() {
    console.log('Search Bar component receiving new props!');
  }

  componentWillUpdate() {
    console.log('Search Bar component will update!');
  }

  componentDidUpdate() {
    console.log('Search Bar component updated!');
  }

  componentWillUnmount() {
    console.log('Search Bar component will unmount!');
  }

  dispatchSearchFilterAction(event) {
    console.log('Entered dispatchSearchFilterAction', event.target.value, this.props);
    this.props.setSearchFilter(event.target.value);
  }

  render() {
    return (
      <div className="col-sm-7">
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
