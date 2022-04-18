import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';




export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // al ser una const no podriamos cambiar este array, y ademos como le decimos a react que tiene q renderizar la parte de la lista...

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories ( [...categories, 'Demon Slayer'] ); // agrego con spread..
    //     setCategories (cat => [...cat, 'Demon Slayer']); 
    // }




return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />


        <ol>
            {
                categories.map( (category) => (
                    <GifGrid
                        key = { category } 
                        category={ category }  
                    />
                      
                ))
            }
        </ol>
    </>)




}



export default GifExpertApp;