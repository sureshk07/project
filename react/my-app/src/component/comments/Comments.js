import React from "react";


const Comments = (props) => {
  return (
      <div className="comments">
        <a className="avatar">
          <img src={props.image}/>
        </a>
        <div className="content">
          <a className="author">{props.name}</a>
          <div className="metadata">
            <span className="date">{props.time}</span>
          </div>
          <div className="text">
            {props.comment}
          </div>

        </div>
      </div>
  )
}
export default Comments;