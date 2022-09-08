import '../styles/Carousel.css'
import Arrow from './Carousel/Arrow'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function Carousel(props) {
    let range = props.range
    let limitSlide = (props.slides * range)
    let [start, setStart] = useState(0)
    let [end, setEnd] = useState(start + range)
    let [intervalId, setIntervalId] = useState()
    let interval = props.interval * 1000
    let items = props.data

    const section = (event, index) =>(
        <Link to={`/details/${event._id}`} className='Carousel-event' key={index}>
            <h3 className='Carousel-title'>{event.city}</h3>
            <img src={event.photo} alt={event.city} className='Carousel-img'/>
        </Link>
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
        
    useEffect(() => {
        let id = setInterval(function (){
            next()
        }, interval)
        setIntervalId(id)
        return() => clearInterval(intervalId);
    }, [start])

  return (
    
    <div className='Carousel-container'>
        <div className='Carousel-Arrow'>
            <Arrow icon={leftArrow} click={previous} />
            <h4 className='Carousel-TitleSection'>{props.text}</h4>
            <Arrow icon={rightArrow} click={next} />
        </div>
        <div className='Carousel-Slide'>
            {items.slice(start, end).map(section)}
        </div>
    </div>
    
  )
}
export default Carousel

let leftArrow = 
<div className='Left-arrow'>
    <svg className='Svg-arrow' viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="30.5"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
</div>

let rightArrow = 
<div className='Right-arrow'>
    <svg className='Svg-arrow' viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="30.5"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
</div>
