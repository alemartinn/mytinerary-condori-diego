import React, { useRef, createRef, useState} from 'react';
import InputMod from '../components/InputMod';
import '../styles/NewCity.css'
import { useAddNewCityMutation } from '../features/citiesAPI';

export default function NewCity() {

    const modelForm = [
        {name: 'city', type: 'text'},
        {name: 'country', type: 'text'},
        {name: 'photo', type: 'text'},
        {name: 'population', type: 'number', min: 1000, max:1000000000},
        {name: 'fundation', type: 'number', min: 1000, max: 2022}
    ]

    let allInputs = useRef([]);
    allInputs.current= modelForm.map((el,index) => allInputs.current[index] = createRef());

    const viewForm = (elem, index) => (

        <div className='form__group field' key={index}>
            <InputMod 
                className='form__field'
                name={elem.name} 
                type={elem.type} 
                required 
                ref={allInputs.current[index]}
                min={`${elem.type === 'number' && elem.min}`} 
                max={`${elem.type === 'number' && elem.max}`} 
                onChange={handleChange}
            />
            <label className='form__label' htmlFor={elem.name}>{elem.name}</label>
            
        </div>
    )

    const [city, setCity] = useState(
        {
            city: "",
            country: "",
            photo: "",
            population: 1000,
            fundation: 1000,
        }
    )

    const handleChange = e => {
        
        setCity({
            ...city,
            [e.target.name]: e.target.value,
        })
    }
    
    const [addCity] = useAddNewCityMutation()
    const handleSubmit = (e) => {
        e.preventDefault()
        addCity(city)
    }

    return (
        <div className='Input-container'>
            <form className='NewCity-form' onSubmit={handleSubmit}>
                <h2 className='Title-form'>New City</h2>
                <div className='Inputs-form'>{modelForm.map(viewForm)}</div>
                <button className="icon-btn add-btn" type='submit'>
                    <div className="add-icon"></div>
                    <div className="btn-txt">Add City</div>
                </button>
            </form>
        </div>
        
    )
  }
