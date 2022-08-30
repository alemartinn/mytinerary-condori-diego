import '../styles/Cities.css'

export default function createCard(props) {
    return (
        <div className='cityCard' key={props.id}>
            <h3>{props.title}</h3>
            <img src={props.img} alt={props.city} className='city-img'/>
        </div>
    )
}