import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddNewItineraryMutation } from '../features/itinerariesAPI'
import '../styles/FormNewItinerary.css'
import InputMod from './InputMod'
import Alert from './Alert'

const FormNewItinerary = (props) => {
    const client = localStorage.getItem("client")
    const userLocal = JSON.parse(client)
    const userId = userLocal.id
    const [itinerary, setItinerary] = useState({
        name: "", user: userId, city: props.idCity, price: "", likes: [],
        tags:[], duration: ""
    })

    const modelForm = [
        {name: 'name', type: 'text'},
        {name: 'price', type: 'number'},
        {name: 'tags', type: 'text'},
        {name: 'duration', type: 'number'}
    ]

    const viewForm = (elem, index) => (
        <div className='form__group field' key={index}>
            <InputMod 
                className='form__field'
                name={elem.name} 
                type={elem.type}
                required
                onChange={handleChange}
            />
            <label className='form__label' htmlFor={elem.name}>{elem.name}</label>
        </div>
    )

    const handleChange = e => {
        if(e.target.name === "tags"){
            setItinerary({
                ...itinerary, [e.target.name]: [e.target.value]
            })
        } else {
            setItinerary({
                ...itinerary, [e.target.name]: e.target.value
            })
        }
    }

    const [newItinerary] = useAddNewItineraryMutation()
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {data, error} = await newItinerary(itinerary)
        if(error){
            Alert("error",error.data.message)
        } else {
            console.log(data);
            // await Swal.fire({
            //     icon: 'success',
            //     title: `Created Itinerary!`,
            //     text: `You can see it in page`
            // })
            Alert("success",data.message)
            Navigate(-1)
        }
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