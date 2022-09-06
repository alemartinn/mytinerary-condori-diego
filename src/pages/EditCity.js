import React, {useState, useEffect} from "react";
import axios from 'axios';
import InputMod from '../components/InputMod';
import '../styles/EditCity.css';

export default function EditCity() {

    const [dataCities, setCities] = useState([]);
    const [cityToEdit, setCityToEdit] = useState('')
    const [dateCity, setDateCity] = useState()

    const formOdel = [
        {name: 'city', type: 'text'},
        {name: 'country', type: 'text'},
        {name: 'photo', type: 'text'},
        {name: 'population', type: 'number', min: 1000, max:1000000000},
        {name: 'fundation', type: 'number', min: 1000, max: 2022}
    ]

    useEffect(()=>{
        axios.get('http://localhost:4000/cities/')
            .then(response=> setCities(response.data.response))
            .catch(error => console.log(error))
    },[])

    const options = (city) => (
        <option className='options' value={city.city} key={city._id} data_key={city._id}>{city.city}</option>
    )
    
    const viewForm = (input, i) => (

        <div className='form__group field' key={i}>
            <InputMod 
                className='form__field' 
                id={input.name} 
                type={input.type} 
                name={input.name} 
                min={`${input.type === 'number' && input.min}`} 
                max={`${input.type === 'number' && input.max}`} 
                // defaultValue={ cityToEdit[input.name] || dateCity || ''}
                defaultValue={ input.name === 'fundation' ? dateCity : cityToEdit[input.name] || ''}
            />
            <label className='form__label' htmlFor={input.name}>{input.name}</label>
        </div>
    )
    
    const editingCity = async (e) => {
        // console.log(e.target.value)
        // console.log(e.target.options[e.target.options.selectedIndex].getAttribute("data_key"))
        await axios.get('http://localhost:4000/cities/' + e.target.options[e.target.options.selectedIndex].getAttribute("data_key"))
        .then(response => setCityToEdit(response.data.response))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        console.log(cityToEdit)
        if (cityToEdit){
            let yearNow = new Date(cityToEdit.fundation).getFullYear();
            // console.log(yearNow)
            setDateCity(yearNow)
            // setCityToEdit({...cityToEdit, fundation: yearNow})
        }
    } , [cityToEdit])


    
  return (
    <div className='Edit-container'>
        <h2 className='Edit-title'>Choose a City</h2>
        <div className='select-container'>
            <select className='Select' name='cities'onChange={(e) => editingCity(e)} >
            <option>--Select City--</option>
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
