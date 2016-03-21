import React from 'react';

export default (props) => {
  return (
    <li>
      <h3>
        <a href="#">{props.title}</a>
        <a href="#"><i className="fa fa-trash-o"></i></a>
        <a href="#"><i className="fa fa-pencil"></i></a>
      </h3>
      <hr />
      <p>
        {props.description}
      </p>
      {props.tags.map((tag) => {
        return (
          <span key={tag.id} className="label label-default">{tag.name}</span>
        )
      })}   
    </li>
  )
}