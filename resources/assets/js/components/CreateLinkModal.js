import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { toggleLinkModal, optimisticLinkCreate, createNewLink} from '../actions/actions';
import Select from 'react-select';

export default class CreateLinkModal extends Component {

  componentWillMount() {

    // Recreate the tags array for an accepted format
    // needed by react-select
    let tagSelectArray = [];
    this.props.tags.forEach((tag) => {
      tagSelectArray.push({
        value: tag.id,
        label: tag.name
      })
    });
    
    // Set an initial state the updates as the user
    // enters data in the link creation modal
    this.setState({
      id: 123123123,
      url: '',
      title: '',
      description: '',
      tags: tagSelectArray,
      value: [],
    });
  }

  componentDidMount(){
    const overlay = document.getElementById('link-modal-overlay');
    const modal = document.getElementById('link-modal');

    // When the overlay is clicked, send an action
    // to stop displaying the link creation modal
    overlay.onclick = (e) => {
      if(e.target == overlay) {
        this.props.toggleLinkModal(false);
      }
    }
  }

  handleSubmit() {
    this.state.selectedTags = this.state.value.map((tag) => {
      return {
        id: tag.value,
        name: tag.label
      }
    })
    // console.log('Submitted', this.state);
    this.props.createNewLink(this.state);
    this.props.toggleLinkModal(false);
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  handleSelectChange (value) {
    this.setState({ value });
  }

  // Send an action to close the modal when the
  // Close button is pressed
  handleClose() {
    this.props.toggleLinkModal(false);
  }

  render() {
    return (
      <div id="link-modal-overlay">
        <div id="link-modal">
          <h3>Add a new Link</h3>
          <div className="modal-body">
            

              <div className="form-group">
              <label htmlFor="url">Url</label>
              <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-link"></i></div>
                <input id="url" className="form-control" type="url" placeholder="Url"
                       value={this.state.url}
                       onChange={this.handleChange.bind(this, 'url')}/>
              </div>
              </div>
              <hr/>

              <div className="form-group">
              <label htmlFor="title">Title</label>
              <input id="title" className="form-control" type="text" placeholder="Title"
                     onChange={this.handleChange.bind(this, 'title')}/>
              </div>

              <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" className="form-control" cols="30" rows="6" placeholder="Description"
                        onChange={this.handleChange.bind(this, 'description')}>
              </textarea>
              </div>

              <div className="form-group">
              <label htmlFor="tagSelect">Select Tags</label>
               <Select
                  name="form-field-name"
                  value={this.state.value}
                  options={this.state.tags}
                  onChange={this.handleSelectChange.bind(this)} 
                  multi={true}
              />
              </div>  

              <button className="btn btn-success"
                      onClick={this.handleSubmit.bind(this)}
              >Save</button>
              <button className="btn btn-danger" 
                      onClick={this.handleClose.bind(this)}
              >Close</button>
              
            
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({tags, linkModalIsActive}) {
  return {
    tags,
    linkModalIsActive
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleLinkModal: (isActive) => {
      dispatch(toggleLinkModal(isActive));
    },
    createNewLink: (link) => {
      dispatch(optimisticLinkCreate(link));
      dispatch(createNewLink(link));
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateLinkModal);