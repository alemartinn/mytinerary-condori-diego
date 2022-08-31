import '../styles/Cities.css'

const CityCard = (props) => {
    return (
        <div className='cityCard' key={props.id}>
            <h3>{props.title}</h3>
            <img src={props.photo} alt={props.city} className='city-img'/>
        </div>
    )
}
 
export default CityCard;