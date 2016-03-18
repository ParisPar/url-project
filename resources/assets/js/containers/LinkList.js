import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLinks, setSearchFilter } from '../actions/actions';
import LinkItem from '../components/LinkItem';

function getFilteredLinks(links, searchFilter, tagFilters) {
  // console.log('getFilteredLinks',...arguments);
  if(searchFilter == null) {
    searchFilter = '';
  }

  // Filter links by the search term
  const lcSearchFilter = searchFilter.toLowerCase();
  const searchFilteredLinks = links.filter((link) => {
    return link.title.toLowerCase().includes(lcSearchFilter);
  });

  if(tagFilters.length == 0)
    return searchFilteredLinks;

  // Take the link already filtered by the search term
  // and filter them by the selected tags
  
  return searchFilteredLinks.filter((link) => {
    let matchesSelectedTags = false;
    link.tags.forEach((tag) => {
      if(tagFilters.includes(tag.id)) {
        matchesSelectedTags = true;
      }
    })
    if(matchesSelectedTags) {
      return true;
    }
  })
}

class LinkList extends Component {
  componentWillMount() {
    this.props.fetchLinks();
  }

  renderLinks() {
    return (
      this.props.links.map((link) => {
        return (
          <LinkItem key={link.id}
                    title={link.title}
                    description={link.description}
                    tags={link.tags}
          />
        )
      })
    )
  }

  renderPagination() {
    return (
      <ul className="pagination-list">
        <li><a href="#"><i className="fa fa-arrow-left"></i></a></li>
        <li><a href="#">1</a></li>
        <li><a href="#"><i className="fa fa-arrow-right"></i></a></li>
      </ul>
    )
  }

  render() {
    return (
      <div className="col-md-9">
        <div className="app-main">
          <ul className="links-list">
            {this.renderLinks()}
          </ul>
          {this.renderPagination()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({links, searchFilter, tagFilters}) {
  return {
    links: getFilteredLinks(links, searchFilter, tagFilters)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLinks: () => {
      dispatch(fetchLinks());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
