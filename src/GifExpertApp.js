import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';




export const GifExpertApp = () => {

    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Capitán Salami']);

    // const handleAdd = ()=>{

    //     // categories.push('Capitán Salami'); NO SE DEBE HACER ASÍ

    //     setCategories([...categories, 'Capitán Salami']);

    //     // setCategories([ 'Capitán Salami', ...categories]);  si quierp que lo añada al inicio

    //     // console.log(categories);
    // }

    return (
        <>

            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr/>


            <ol>

                {
                    categories.map( category =>(

                        < GifGrid
                         key = { category }
                         category={category}
                        /> 

                        
                    ))
                    
                    
                }
                    
            </ol>
            
        </>
    )
}


// export default GifExpertApp;
