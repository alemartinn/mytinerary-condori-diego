import React from 'react'
import '../styles/Comment.css'

export default function Comments(props) {
    const comment = props.comment;
  return (
    <div className='Comment-Container'>
        {/* <img src={comment.user.photo} alt='User'/> */}
        <div className='Comment-information'>
            <p className='Comment-information-user'>{comment.user.name} {comment.user.lastName}</p>
            <p>{comment.comment}</p>
        </div>
    </div>
  )
}
