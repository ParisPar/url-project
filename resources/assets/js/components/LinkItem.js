import React from 'react';
import { Link } from 'react-router';


export default (props) => {
  return (
    <li>
      <h3>
        <a href={props.url}>{props.title}</a>
        <Link to={"/home/edit/" + props.id}>
          <i className="fa fa-pencil"></i>
        </Link>
        <Link to={"/home/delete/" + props.id}>
          <i className="fa fa-trash-o"></i>
        </Link>
      </h3>
      {(() => {
        if(props.description != null && props.description != '') {
          return (<hr />)
        }
      })()}
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