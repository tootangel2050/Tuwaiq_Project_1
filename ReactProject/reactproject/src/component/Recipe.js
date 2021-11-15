import React from 'react'
import { useParams } from "react-router-dom";
import recipes from './Data';

export default function Recipe() {
    let params=useParams();
    //params = {recipeName:"Sambosa"}
    // return <h2>Invoice: {params.invoiceId} </h2>;
    const recipe = recipes.find((elem)=>{
        return elem.name.includes(params.recipeName)
    })
    const image = require(`${recipe.images}`);
    console.log(image);
    return(
        <div>
            <p style={{border:"solid" ,backgroundColor:"gray"}}>Ingredients:{recipe.ingredients}</p>
            <p style={{border:"solid" ,backgroundColor:"gray"}}> Name:{recipe.name} </p>
            <p style={{border:"solid" ,backgroundColor:"gray"}}>steps:{recipe.steps}</p>
            <img src={image.default} style={{marginLeft:"350px", width:500}} />
            </div>
    );
        
}
