import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkForm from '../components/LinkForm';
import update from 'react-addons-update';
import { editLink } from '../actions/actions';

class EditLink extends Component {

  componentWillMount() {
    // Find the link to be edited
    let link = this.props.links.find((link) => link.id == this.props.params.linkId);

    // If the link id that was passed via the url
    // doesn't exist, redirect to /home
    if(! link) {
      this.context.router.push('/home');
    }

    this.setState({
      draftLink: Object.assign({}, link)
    });

    // Here we'll store the selected tags in a format that's
    // acceptable by react-select
    let selectedTags = link.tags.map((tag) => {
      return {
        value: tag.id,
        label: tag.name
      }
    });

    // All user tags in react-select acceptable format
    let allTags = this.props.tags.map((tag) => {
      return {
        value: tag.id,
        label: tag.name
      }
    });

    this.setState({
      ['selectedTags']: selectedTags,
      ['allTags']: allTags
    });
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

    console.log('Sending edit request', this.state.draftLink, tagIds);

    this.props.editLink(this.state.draftLink, tagIds);

    this.context.router.push('/home');
  }

  handleClose() {
    this.context.router.push('/home');
  }

  render() {
    return (
      <LinkForm draftLink={this.state.draftLink}
                allTags={this.state.allTags}
                selectedTags={this.state.selectedTags}
                modalTitle="Edit Link"
                buttonLabel="Save"
                handleClose={this.handleClose.bind(this)}
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleSelectChange={this.handleSelectChange.bind(this)}
                />
    );
  }
}

EditLink.contextTypes = {
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
    editLink: (link, linkTags) => {
      dispatch(editLink(link, linkTags));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLink);