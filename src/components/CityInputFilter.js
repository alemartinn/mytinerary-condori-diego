import React from 'react';

const CityInputFilter = ({dataCities, setDataCities, inputRef,handleInput}) => {

    return (  
        <form>
            <label>
                <input type='text' ref={inputRef} className='Input-one' placeholder='Search a city by name: ' onChange={handleInput}></input>
            </label>
        </form>
    );
}
 
export default CityInputFilter;