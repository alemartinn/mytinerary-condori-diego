import React from 'react'
import '../styles/Comment.css'

export default function Comments(props) {
    const comment = props.comment;
  return (
    <div className='Comment-Container'>
        <img className='Comment-img' src={comment.user.photo} alt='User'/>
        <div className="container">
            <div className="container_terminal"></div>
            <div className="terminal_toolbar">
                <div className="butt">
                    <button className="btn btn-color"></button>
                    <button className="btn"></button>
                    <button className="btn"></button>
                </div>
                <p className="user">{comment.user.name} {comment.user.lastName}:</p>
            </div>
            <div className="terminal_body">
                <div className="terminal_promt">
                    <span className="terminal_bling">{comment.comment}</span>
                    <span className="terminal_cursor"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
