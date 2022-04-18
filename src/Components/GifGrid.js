import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GitGridItem } from './GitGridItem';

export const GifGrid = ( {category} ) => {
  

    const {data:images, loading} = useFetchGifs( category ); //data:images (renombra)
    

  return (
    <>
    <h3 className="animate__animated animate__fadeIn animate__slower">{ category }</h3>

    {loading && <p>Loading...</p> }

    <div className="card-grid">
        
        
            {
                images.map ( img => (
                    <GitGridItem
                        key = {img.id} 
                        { ...img}
                        />
                ))
            }
        
    </div>
    </>
  )
}
