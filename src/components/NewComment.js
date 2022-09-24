import React, { useRef } from 'react'
import { useCreateCommentMutation } from '../features/commentAPI'
import Alert from './Alert'
import Swal from 'sweetalert2'


export default function NewComment(props) {

    const client = localStorage.getItem("client")
    const userLocal = JSON.parse(client)
    const idItinerary = props.idItinerary
    const input = useRef()
    const [createComment] = useCreateCommentMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data,error} = await createComment({comment: input.current.value, user:userLocal.id, itinerary: idItinerary})
        if(data){
            let timerInterval
            Swal.fire({
                title: 'Writing comment!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.location.reload(false);
                }
                }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    result = "nice"
                }
            })
            
        }else{
            Alert("error",error.data.message)
        }
    }

  return (
        <div className='Comment-Container'>
        <img className='Comment-img' src={userLocal.photo} alt='User'/>
        <div className="container">
            <div className="container_terminal"></div>
            <div className="terminal_toolbar">
                <div className='buttons-name'>
                    <div className="butt">
                        <button className="btn btn-color"></button>
                        <button className="btn"></button>
                        <button className="btn"></button>
                    </div>
                    <p className="user">{userLocal.name} :</p>
                </div>
            </div>
            <div className="terminal_body">
                <form className="terminal_promt" onSubmit={e => handleSubmit(e)}>
                    <input className='comment-input' type="text" name="comment" placeholder='Write comment' minLength="3" maxLength="350" ref={input}/>
                    <button className='NewComment-send-btn' type='submit'>
                    <svg className='NewComment-send-svg' xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                    </svg>
                    </button>                    
                </form>
            </div>
        </div>
    </div>
    )
}
