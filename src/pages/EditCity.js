import React, {useState, useEffect} from "react";
import axios from 'axios';
import InputMod from '../components/InputMod';
import '../styles/EditCity.css';

export default function EditCity() {

    const [dataCities, setCities] = useState([]);
    const formOdel = [
        {name: 'photo', type: 'text'},
        {name: 'population', type: 'number', min: 1000, max:1000000000},
        {name: 'fundation', type: 'number', min: 1000, max: 2022}
    ]

    useEffect(()=>{
        axios.get('http://localhost:4000/cities/')
            .then(response=> setCities(response.data.response))
            .catch(error => console.log(error))
    },[])
    
    const options = (city, index) => (
        <option className='options' value={city.city} key={index}>{city.city}</option>
    )
    
    const viewForm = (input, i) => (

        <div className='form__group field' key={i}>
            <InputMod className='form__field' id={input.name} type={input.type} name={input.name} min={`${input.type == 'number' && input.min}`} max={`${input.type == 'number' && input.max}`}/>
            <label className='form__label' htmlFor={input.name}>{input.name}</label>  
        </div>
    )

  return (
    <div className='Edit-container'>
        <h2 className='Edit-title'>Choose a City</h2>
        <div className='select-container'>
            <select className='Select' name='cities'>
            <option defaultValue>--Select City--</option>
            {dataCities.map(options)}
            </select>
        </div>
        <form className='Edit-form'>
        <div className='Inputs-form'>{formOdel.map(viewForm)}</div>
        <button type='submit' id="Send">Edit City</button>
        </form>
    </div>
  )
}
