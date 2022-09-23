import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddNewCityMutation } from '../features/citiesAPI'
import '../styles/FormNewItinerary.css'
import InputMod from './InputMod'

const FormNewItinerary = () => {
    const [itinerary, setItinerary] = useState({
        name: "", user: "", city: "", price: "", likes: [],
        tags:[], duration: ""
    })

    const modelForm = [
        {name: 'name', type: 'text'},
        {name: 'user', type: 'text'},
        {name: 'city', type: 'text'},
        {name: 'price', type: 'text'},
        {name: 'tags', type: 'text'},
        {name: 'duration', type: 'number'}
    ]

    const viewForm = (elem, index) => (
        <div className='form__group field' key={index}>
            <InputMod 
                className='form__field'
                name={elem.name} 
                type={elem.type}
                onChange={handleChange}
            />
            <label className='form__label' htmlFor={elem.name}>{elem.name}</label>
        </div>
    )

    const handleChange = e => {
        setItinerary({
            ...itinerary, [e.target.name]: e.target.value
        })
    }

    const [newItinerary] = useAddNewCityMutation()
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await newItinerary(itinerary)
        Navigate("mytineraries/:id")
    }
  return (
    <div className='NewItyn-container'>
        <form className='NewItin-form' onSubmit={handleSubmit}>
        <h2 className='Title-form'>New Itinerary</h2>
        <div className='Inputs-form'>{modelForm.map(viewForm)}</div>
        <button className="icon-btn add-btn" type='submit'>
            <div className="add-icon"></div>
            <div className="btn-txt">Add</div>
        </button>
        </form>
    </div>
  )
}

export default FormNewItinerary