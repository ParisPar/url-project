import React from 'react';

export default (props) => {
  return (
    <li>
      <a href="#">
        <i className="fa fa-tag"></i>{props.name}
      </a>
    </li>
  )
}