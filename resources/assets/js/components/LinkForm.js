import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

export default class LinkForm extends Component {

  componentWillMount() {
    this.setState({
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
        this.props.handleClose();
      }
    }
  }

  showErrorForTitle() {
    if(! this.state.userFocusedTitle) {
      return false;
    }
    return this.props.draftLink.title == '';
  }

  showErrorForUrl() {
    if(! this.state.userFocusedUrl) {
      return false;
    }
    return this.props.draftLink.url == '';
  }


  render() {
    return (
      <div id="link-modal-overlay">
        <div id="link-modal">
          <h3>{this.props.modalTitle}</h3>
          <div className="modal-body">

            <div className={
              this.showErrorForUrl() ? 'form-group has-error' : 'form-group'
            }>
            <label htmlFor="url">Url</label>
            <div className="input-group">
              <div className="input-group-addon"><i className="fa fa-link"></i></div>
              <input id="url" className="form-control" type="url" placeholder="Url"
                     value={this.props.draftLink.url}
                     onChange={(event) => {
                      this.props.handleChange('url',event)
                     }}
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
                   value={this.props.draftLink.title}
                   onChange={(event) => {
                    this.props.handleChange('title',event)
                   }}
                   onBlur={() => this.setState({['userFocusedTitle']: true})}/>
            {this.showErrorForTitle() ? <span className="help-block">The title is required</span> : null}
            </div>

            <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" className="form-control" cols="30" rows="6" placeholder="Description"
                      value={this.props.draftLink.description}
                      onChange={(event) => {
                        this.props.handleChange('description',event)
                      }}>
            </textarea>
            </div>

            <div className="form-group">
              <label htmlFor="tagSelect">Select Tags</label>
              <Select
                name="form-field-name"
                value={this.props.selectedTags}
                options={this.props.allTags}
                onChange={this.props.handleSelectChange.bind(this)} 
                multi={true}
              />
            </div>


            <button className="btn btn-success"
                    onClick={() => this.props.handleSubmit()}
                    disabled={ this.props.draftLink.url == '' || this.props.draftLink.title == '' }
            >{this.props.buttonLabel}</button>
            <button className="btn btn-danger" 
                    onClick={() => this.props.handleClose()}
            >Close</button>
          
          </div>
        </div>
      </div>
    )
  }
}

LinkForm.propTypes = {
  handleChange: PropTypes.func.isRequired
}