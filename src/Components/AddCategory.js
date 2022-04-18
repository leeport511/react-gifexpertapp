import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        
        setInputValue(e.target.value); // reescribe el titulo del imput
    }

    const handleSubmit = (e) => {
        e.preventDefault();  //funcion q previene el F5 en el enter

        if ( inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]); //llama func de otro comp
            setInputValue("");
        }

        
        //console.log('Submit Hecho');
    }                                       

  return (
    
    <form onSubmit={handleSubmit}>  
        <input 
            type="text"
            value={inputValue}
            onChange={ handleInputChange } 
        />
    </form> // con ONSUBMIT manejo la accion del enter (evitar el refresh)

  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}