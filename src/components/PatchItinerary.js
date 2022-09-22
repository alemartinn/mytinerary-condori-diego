import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetOneItineraryQuery, useUpdateItineraryMutation } from '../features/itinerariesAPI';
import Alert from './Alert';
import InputMod from './InputMod';

const PatchItinerary = ({idTinerary}) => {

    const {data} = useGetOneItineraryQuery(idTinerary);
    const Navigate = useNavigate();
    const [updateItinerary] = useUpdateItineraryMutation();
    const [editItinerary, setEditItinerary] = useState({});

    const [modelF, editModelF] = useState([
        {name: 'name', type: 'text', defaultValue: ''},
        {name: 'price', type: 'number', defaultValue: ''},
        {name: 'tags', type: 'text', defaultValue: ''},
        {name: 'duration', type: 'number', defaultValue: ''}
    ]);

    useEffect(()=>{
        if (data){
            editModelF([
                {name: 'name', type: 'text', defaultValue: data.response.name},
                {name: 'price', type: 'number', defaultValue: data.response.price},
                {name: 'tags', type: 'text', defaultValue: data.response.tags[0]},
                {name: 'duration', type: 'number', defaultValue: data.response.duration}
            ]);
            setEditItinerary({
                name: data.response.name,
                city: data.response.city,
                user: data.response.user,
                likes: data.response.likes,
                price: data.response.price, 
                tags:[data.response.tags[0]], 
                duration: data.response.duration
            });
        }
    },[data]);
    
    const handleChange = e => {
        if(e.target.name === "tags"){
            setEditItinerary({
                ...editItinerary, [e.target.name]: [e.target.value]
            });
        } else {
            setEditItinerary({
                ...editItinerary, [e.target.name]: e.target.value
            });
        }
    };

    const viewForm = (elem, index) => (
        <div className='form__group field' key={index}>
            <InputMod 
                className='form__field'
                name={elem.name} 
                type={elem.type}
                defaultValue = {elem.defaultValue}
                required
                onChange={handleChange}
            />
            <label className='form__label' htmlFor={elem.name}>{elem.name}</label>
        </div>
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await updateItinerary({editItinerary: editItinerary, id: idTinerary});
        if(error){
            Alert("error",error.data.message)
        } else {
            Alert("success",data.message)
            Navigate(-1)
        }
    };

    return (  
        <div className='NewItyn-container'>
        <form className='NewItin-form' onSubmit={handleSubmit}>
        <h2 className='Title-form'>Edit Itinerary</h2>
        <div className='Inputs-form'>{modelF.map(viewForm)}</div>
        <button className="icon-btn add-btn" type='submit'>
            <div className="add-icon"></div>
            <div className="btn-txt">Edit</div>
        </button>
        </form>
    </div>
    );
}
 
export default PatchItinerary;