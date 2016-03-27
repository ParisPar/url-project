import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkForm from '../components/LinkForm';
import update from 'react-addons-update';
import { deleteLink } from '../actions/actions';

class DeleteLink extends Component {

  componentWillMount() {
    // Find the link to be edited
    let link = this.props.links.find((link) => link.id == this.props.params.linkId);

    // If the link id that was passed via the url
    // doesn't exist, redirect to /home
    if(! link) {
      this.context.router.push('/home');
    }

    this.setState({
      linkToDelete: link
    });

  }

  componentDidMount(){
    const overlay = document.getElementById('link-modal-overlay');
    const modal = document.getElementById('link-modal');
    
    // When the overlay is clicked, redirect
    // through react-router to /home
    overlay.onclick = (e) => {
      if(e.target == overlay) {
        this.handleClose();
      }
    }
  }

  handleSubmit() {
    this.props.deleteLink(this.props.params.linkId);

    this.context.router.push('/home');
  }

  handleClose() {
    this.context.router.push('/home');
  }

  render() {
    return (
      <div id="link-modal-overlay">
        <div id="link-modal">
          <h3>Are you sure you want to delete the following link?</h3>
          <div className="modal-body">
            
            <strong>Url:</strong>
            <p>
              <a href={this.state.linkToDelete.url}>{this.state.linkToDelete.url}</a>
            </p>

            <strong>Title:</strong>
            <p>
              {this.state.linkToDelete.title}
            </p>

            <strong>Description:</strong>
            <p>
              {this.state.linkToDelete.description}
            </p>

            <button className="btn btn-danger"
                    onClick={() => this.handleSubmit()}
            >Yes</button>
            <button className="btn btn-default" 
                    onClick={() => this.handleClose()}
            >No</button>

          
          </div>
        </div>
      </div>
    );
  }
}

DeleteLink.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps({links}) {
  return {
    links
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteLink: (link) => {
      dispatch(deleteLink(link));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteLink);