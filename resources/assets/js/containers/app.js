import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import TagList from '../containers/TagList';
import LinkList from '../containers/LinkList';
import CreateLinkModal from '../components/CreateLinkModal';
import { connect } from 'react-redux';
import { fetchTags, fetchLinks, toggleLinkModal } from '../actions/actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  
  componentWillMount() {
    this.props.fetchTags();
    this.props.fetchLinks();
  }

  toggleModal() {
    this.props.toggleLinkModal(true);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <a href="#" id="new-button" className="btn btn-primary"
               onClick={this.toggleModal.bind(this)}>
              <i className="fa fa-plus"></i>
              New Link
            </a>
          {/* <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={100} transitionLeaveTimeout={100}>*/}
            {(() => {
              if(this.props.linkModalIsActive){
                return (
                    <CreateLinkModal />         
                );
              }
            })()}
            {/* </ReactCSSTransitionGroup>  */}
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

function mapStateToProps({linkModalIsActive}) {
  return {
    linkModalIsActive
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => {
      dispatch(fetchTags());
    },
    fetchLinks: () => {
      dispatch(fetchLinks());
    },
    toggleLinkModal: (isActive) => {
      dispatch(toggleLinkModal(isActive));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);