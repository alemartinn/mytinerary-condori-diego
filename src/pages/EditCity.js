import React, {useState, useRef, createRef} from "react";
import InputMod from '../components/InputMod';
import '../styles/EditCity.css';
import { useGetOneCityQuery, useGetAllCitiesQuery, useEditCityMutation } from '../features/citiesAPI'

export default function EditCity() {

    const [cityToEdit, setCityToEdit] = useState('')
    const formOdel = [
        {name: 'city', type: 'text'},
        {name: 'country', type: 'text'},
        {name: 'photo', type: 'text'},
        {name: 'population', type: 'number', min: 1000, max:1000000000},
        {name: 'fundation', type: 'number', min: 1000, max: 2022}
    ]

    const { 
        data: allCities,
    } = useGetAllCitiesQuery('');

    const { 
        data: oneCity,
        isSuccess: isOneCitySuccess
    } = useGetOneCityQuery(cityToEdit);
    
    const [editCity] = useEditCityMutation();

    let typeInputs = [];
    let allInputs = useRef([]);
    allInputs.current= formOdel.map((el,index) => allInputs.current[index] = createRef());
    
    /* Create a ref to each input from form*/
    formOdel.forEach((element, index) => typeInputs.push(formOdel[index].name))
    allInputs.current= formOdel.map((el,index) => allInputs.current[index] = createRef());


    const handleSubmit = e => {
        e.preventDefault();
        let data = {};
        typeInputs.forEach((element, index) => {data[element] = allInputs.current[index].current.value})
        let obj = {
            id: oneCity.response._id,
            city: data
        }
        editCity(obj);
    }

    const editingCity = async (e) => {
        setCityToEdit(e.target.options[e.target.options.selectedIndex].getAttribute("data_key"))
    }

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
                ref={allInputs.current[i]}
                defaultValue={ input.name === 'fundation' ? [isOneCitySuccess ? new Date(oneCity.response.fundation).getFullYear() : null] : oneCity?.response[input.name] || ''}
            />
            <label className='form__label' htmlFor={input.name}>{input.name}</label>
        </div>
    )

  return (
            <div className='Edit-container'>
                <form className='Edit-form' onSubmit={(e)=>handleSubmit(e)}>
                <h2 className='Edit-title'>Choose a City</h2>
                <div className='select-container'>
                    <select className='Select' name='cities'onChange={(e) => editingCity(e)} >
                        <option data_key={oneCity?.response._id}>--Select City--</option>
                        {allCities?.response?.map(options)}
                    </select>
                </div>
                <div className='Inputs-form'>{formOdel.map(viewForm)}</div>
                <button type='submit' id="Send" >Edit City</button>
                </form>
            </div>
  )
}
