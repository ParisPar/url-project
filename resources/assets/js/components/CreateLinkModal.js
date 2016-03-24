import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { optimisticLinkCreate, createNewLink} from '../actions/actions';
import Select from 'react-select';



export default class CreateLinkModal extends Component {

  constructor(props, context){
    super(props);
    this.context = context;
  }

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
      userFocusedUrl: false,
      userFocusedTitle: false
    });
  }

  componentDidMount(){
    const overlay = document.getElementById('link-modal-overlay');
    const modal = document.getElementById('link-modal');

    // When the overlay is clicked, redirect
    // through react-router to /home
    overlay.onclick = (e) => {
      if(e.target == overlay) {
        this.context.router.push('/home');
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
    this.props.history.push('/home');
  }

  showErrorForUrl() {
    if(! this.state.userFocusedUrl) {
      return false;
    }
    return this.state.url == '';
  }

  showErrorForTitle() {
    if(! this.state.userFocusedTitle) {
      return false;
    }
    return this.state.title == '';
  }

  render() {
    return (
      <div id="link-modal-overlay">
        <div id="link-modal">
          <h3>Add a new Link</h3>
          <div className="modal-body">
            

              <div className={
                this.showErrorForUrl() ? 'form-group has-error' : 'form-group'
              }>
              <label htmlFor="url">Url</label>
              <p>Some text</p>
              <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-link"></i></div>
                <input id="url" className="form-control" type="url" placeholder="Url"
                       value={this.state.url}
                       onChange={this.handleChange.bind(this, 'url')}
                       onBlur={() => this.setState({['userFocusedUrl']: true})}/>
              </div>
              {this.showErrorForUrl() ? <span className="help-block">The url is required</span> : null}
              </div>
              <hr/>

              <div className={
                this.showErrorForTitle() ? 'form-group has-error' : 'form-group'
              }>
              <label htmlFor="title">Title</label>
              <input id="title" className="form-control" type="text" placeholder="Title"
                     onChange={this.handleChange.bind(this, 'title')}
                     onBlur={() => this.setState({['userFocusedTitle']: true})}/>
              {this.showErrorForTitle() ? <span className="help-block">The title is required</span> : null}
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
                      disabled={ this.state.url == '' || this.state.title == '' }
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

CreateLinkModal.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps({tags}) {
  return {
    tags
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewLink: (link) => {
      dispatch(optimisticLinkCreate(link));
      dispatch(createNewLink(link));
    },
  };
}

function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateLinkModal);