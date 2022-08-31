import React from 'react';
import InputMod from '../components/InputMod';
import '../styles/NewCity.css'

export default function NewCity() {
    const [values, setValues] = React.useState()

    const formOdel = [
        {name: 'City', type: 'text'},
        {name: 'Country', type: 'text'},
        {name: 'Photo', type: 'text'},
        {name: 'Population', type: 'number', min: 1000, max:1000000000},
        {name: 'Fundation', type: 'number', min: 0, max: 2022}
    ]

    const formRef = React.useRef()
    const submit = event => {
        event.preventDefault()
        const form = new formOdel(formRef.current)
        setValues(Object.fromEntries(form))
    }

    const viewForm = (input, i) => (

        <fieldset className='NewCity-fieldset' key={i}>
            <label htmlFor={input.name}>{input.name}: <InputMod id={input.name} type={input.type} name={input.name} min={`${input.type == 'number' && input.min}`} max={`${input.type == 'number' && input.max}`}/></label>
        </fieldset>
    )

    return (
        <div className='Input-container'>
            <form className='NewCity-form' onSubmit={submit} ref={formRef}>
                <h2 className='Title-form'>New City</h2>
                <div className='Inputs-form'>{formOdel.map(viewForm)}</div>
                <button className="icon-btn add-btn" type='submit'>
                    <div className="add-icon"></div>
                    <div className="btn-txt">Add City</div>
                </button>
            </form>
        </div>
    )
  }
  