import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TagPopover extends Component {

  constructor() {
    super(...arguments);
    this.handleClose = this.props.handleClose;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClose);

    $('.tag-popover').click(function(event){
      if(event.target.nodeName != 'BUTTON'){
        event.stopPropagation();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClose);
  }

  handleClose(event) {
    this.props.setTagPopover(false, event);
  }

  render() {
    return (
        <div style={this.props.styles} className="tag-popover">
          {this.props.children}
        </div>
    )
  }
}
