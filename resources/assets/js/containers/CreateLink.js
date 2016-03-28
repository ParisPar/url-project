import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkForm from '../components/LinkForm';
import update from 'react-addons-update';
import { createLink } from '../actions/actions';

class CreateLink extends Component {

  componentWillMount() {
    
    this.setState({
      draftLink: {
        url: '',
        title: '',
        description: ''
      },
      allTags: [],
      selectedTags: []
    });

    // All user tags in react-select acceptable format
    let allTags = this.props.tags.map((tag) => {
      return {
        value: tag.id,
        label: tag.name
      }
    });

    this.setState({
      ['allTags']: allTags
    });
    console.log('CreateLink componentWillMount', this.state);
  }

  // Needed for when tags aren't yet fetched from the database
  componentWillReceiveProps() {

    // // All user tags in react-select acceptable format
    // let allTags = this.props.tags.map((tag) => {
    //   return {
    //     value: tag.id,
    //     label: tag.name
    //   }
    // });

    // this.setState({
    //   ['allTags']: allTags
    // });
  }

  componentWillUpdate() {
    console.log('CreateLink componentWillUpdate');
  }

  handleChange(field, event) {
    let nextState = update(this.state, {
      draftLink: {
        [field]: {$set: event.target.value}
      }
    });

    this.setState(nextState);
  }

  handleSelectChange (selectedTags) {
    this.setState({ selectedTags });
  }

  handleSubmit() {
    let tagIds = this.state.selectedTags.map((tag) => tag.value);

    console.log('Sending create request', this.state.draftLink, tagIds);

    this.props.createLink(this.state.draftLink, tagIds);

    this.handleClose();
  }

  handleClose() {
    const overlay = document.getElementById('link-modal-overlay');
    const modal = document.getElementById('link-modal');
    overlay.className = "";
    modal.className = "";

    let router = this.context.router;
    setTimeout(function(){
      router.push('/home');
    },300);
    // this.context.router.push('/home');
  }

  render() {
    return (
      <LinkForm draftLink={this.state.draftLink}
                allTags={this.state.allTags}
                selectedTags={this.state.selectedTags}
                modalTitle="Create a new Link"
                buttonLabel="Create"
                handleClose={this.handleClose.bind(this)}
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleSelectChange={this.handleSelectChange.bind(this)}
                />
    );
  }
}

CreateLink.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps({links, tags}) {
  return {
    links,
    tags
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createLink: (link, linkTags) => {
      dispatch(createLink(link, linkTags));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLink);