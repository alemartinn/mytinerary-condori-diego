import '../styles/Carousel.css'
import Arrow from './Carousel/Arrow'
import {useEffect, useState} from 'react'

function Carousel(props) {
    let range = props.range
    let limitSlide = (props.slides * range)
    let [start, setStart] = useState(0)
    let [end, setEnd] = useState(start + range)
    /*let [intervalId, setIntervalId] = useState()
    let interval = props.interval * 1000*/
    let items = props.data

    const section = event =>(
        <div className='Carousel-event'>
            <h3 className='Carousel-title'>{event.city}</h3>
            <img src={event.img} alt={event.city} className='Carousel-img'/>
        </div>
    )

    function previous(){
        if(start >= range){
            setStart(start - range)
            setEnd(end - range)
        } else {
            setStart(limitSlide - range)
            setEnd(limitSlide)
        }
    }

    function next(){
        if (start < limitSlide - range) {
            setStart(start + range)
            setEnd(end + range)
        } else {
            setStart(0)
            setEnd(range)
        }
    }
        
    /*useEffect(() => {
        let id = setInterval(function (){
            next()
        }, interval)
        setIntervalId(id)
        return() => clearInterval(intervalId);
    }, [start])*/

  return (
    
    <div className='Carousel-container'>
        <div className='Carousel-Arrow'>
            <Arrow icon={"<"} click={previous} />
            <h3 className='Carousel-TitleSection'>{props.text}</h3>
            <Arrow icon={">"} click={next} />
        </div>
        <div className='Carousel-Slide'>
            {items.slice(start, end).map(section)}
        </div>
    </div>
    
  )
}
export default Carousel