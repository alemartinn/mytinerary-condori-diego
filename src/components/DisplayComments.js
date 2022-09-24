import React, { useRef } from 'react'
import { useDeleteCommentMutation, useEditCommentMutation } from '../features/commentAPI';
import '../styles/Comment.css'
import Swal from 'sweetalert2'

export default function Comments(props) {

    const commentRef = useRef();

    const [editComment] = useEditCommentMutation();
    const comment = props.comment;
    const id = props.id
    const commentUserId = props.user._id

    let client = localStorage.getItem("client")
    let userLocal = JSON.parse(client)
    let roleLocal = ""
    let idUserLocal = ""

    if(userLocal && userLocal.role === "admin") {
        roleLocal = "admin"
    } else if(userLocal){
        roleLocal = "user"
        idUserLocal = userLocal.id
    }
    
    const [deleteComment] = useDeleteCommentMutation()
    const deletingComment = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#dd3544',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              deleteComment(id)
              Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
            window.location.reload(false);
        }})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                editComment({comment:commentRef.current.value, id: id});
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

  return (
    <div className='Comment-Container'>
        <img className='Comment-img' src={comment.user.photo} alt='User'/>
        <div className="container">
            <div className="terminal_toolbar">
                <div className='buttons-name'>
                    <div className="butt">
                        <button className="btn btn-color"></button>
                        <button className="btn"></button>
                        <button className="btn"></button>
                    </div>
                    <p className="user">{comment.user.name} {comment.user.lastName}:</p>
                </div>
                {(userLocal && (roleLocal === "admin" || idUserLocal === commentUserId))?
                <>                    
                    <svg className="comment-delete" onClick={deletingComment} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                    </svg>
                </>
                : null}
            </div>

            <div className="terminal_body">
                {(userLocal && (roleLocal === "admin" || idUserLocal === commentUserId))?
                <>
                    <form className="terminal_promt" onSubmit={e => handleSubmit(e)}>
                        
                        <input id={id} className='comment-input' type="text" name="comment" required defaultValue={comment.comment} minLength="3" maxLength="350" ref={commentRef}/>
                                          
                        <button className='comment-edit-button' type='submit'>
                        <svg className="comment-edit" xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                        </button>                    
                    </form>                    
                </>
                :
                    <div className="terminal_promt">
                        <span className="terminal_bling">{comment.comment}</span>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}
