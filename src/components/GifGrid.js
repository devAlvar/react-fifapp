import React from 'react'

// import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [ count, setCount] = useState(0)

    // const [ images, setImages] = useState([])

    const {data, loading} = useFetchGifs(category);

    console.log(loading);

    // useEffect( () =>{
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category]);



    // getGifs();



    
    return (

        <>
        

        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        {loading && <p className="animate__animated animate__flashIn">Loading...</p>}

        <div className="card-grid">
            

                {
                    data.map( img => (

                        <GifGridItem 
                            key = {img.id}
                            {...img} 
                        /> 

                    ))
                }
           

        </div>
        </>

    )
}
