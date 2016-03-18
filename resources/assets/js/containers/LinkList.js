import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchLinks } from '../actions/actions';
import LinkItem from '../components/LinkItem';

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

function mapStateToProps({links}) {
  return {
    links
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchLinks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
