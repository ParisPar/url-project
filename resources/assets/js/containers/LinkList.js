import React, { Component } from 'react';
import { connect } from 'react-redux';

import LinkItem from '../components/LinkItem';

class LinkList extends Component {

  componentDidMount() {
    console.log('Link List component mounted!');
  }

  componentWillReceiveProps() {
    console.log('Link List component receiving new props!');
  }

  componentWillUpdate() {
    console.log('Link List component will update!');
  }

  componentDidUpdate(newProps) {
    console.log('Link List component updated!');
  }

  componentWillUnmount() {
    console.log('Link List component will unmount!');
  }

  renderLinks(links) {
    return (
      links.map((link) => {
        return (
          <LinkItem key={link.id}
                    id={link.id}
                    url={link.url}
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

  getFilteredLinks(links, searchFilter, tagFilters) {
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



  render() {
    const visibleLinks = this.getFilteredLinks(this.props.links, this.props.searchFilter, this.props.tagFilters);

    return (
      <div className="col-sm-9">
        <div className="app-main">
          <ul className="links-list">
            {this.renderLinks(visibleLinks)}
          </ul>
          {this.renderPagination()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({links, searchFilter, tagFilters}) {
  return {
    links,
    searchFilter,
    tagFilters
  }
}

export default connect(mapStateToProps, null)(LinkList);
