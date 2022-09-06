import React, { useRef, createRef} from 'react';
import axios from 'axios';
import InputMod from '../components/InputMod';
import '../styles/NewCity.css'
import apiurl from '../api';

export default function NewCity() {

    const modelForm = [
        {name: 'city', type: 'text'},
        {name: 'country', type: 'text'},
        {name: 'photo', type: 'text'},
        {name: 'population', type: 'number', min: 1000, max:1000000000},
        {name: 'fundation', type: 'number', min: 1000, max: 2022}
    ]

    let typeInputs = [];
    let allInputs = useRef([]);
    
    /* Create a ref to each input from form*/
    modelForm.forEach((element, index) => typeInputs.push(modelForm[index].name))
    allInputs.current= modelForm.map((el,index) => allInputs.current[index] = createRef());

    const handleSubmit = e => {
        e.preventDefault();
        let data = {};
        typeInputs.forEach((element, index) => {data[element] = allInputs.current[index].current.value})
        // console.log(data);
        axios.post(apiurl+'/cities/', data)
      .then(res => {
        // form.reset();
        console.log(res);
      })
    }

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
            />
            <label className='form__label' htmlFor={elem.name}>{elem.name}</label>
            
        </div>
    )

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
