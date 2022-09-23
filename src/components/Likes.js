import React, { useState } from 'react'
import { useLikeDislikeMutation } from '../features/itinerariesAPI'
import Alert from './Alert'

export default function Likes(props) {
    const user = props.user
    const itinerary = props.itinerary
    const likesArray = itinerary.likes
    const [likeDislike] = useLikeDislikeMutation()
    const [counterLike, setCounterLike] = useState((likesArray).length)
    
    let heart = (style) => {
        return (
            <svg className={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="currentColor"></path></svg>
        )
    }
    
    const [heartColor, setHeartColor] = useState(((likesArray.includes(user?.id) || !user)));


    async function likeItinerary() {
        if (user) {
            try {
                let res = await likeDislike(itinerary._id)
                if (res.data?.success) {
                    let likeArray = res.data.response.likes
                    setCounterLike(likeArray.length);
                    likeArray.includes(user.id)? setHeartColor(true) : setHeartColor(false)
                } else {
                    console.log(res.error)
                }
            } catch(error) {
                console.log(error)
            }
        } else {
            Alert('error','You must be logged in to like this itinerary')
        }
    }
  return (
    <div>
        <div className='Liked' onClick={likeItinerary}>
            {heartColor? heart("like") : heart("dislike")}{counterLike}
        </div>
    </div>
  )
}
