import React from "react"
import {Outlet, Link} from "react-router-dom";


function Foods(props){
    return(
        <div>
            <p>Name:{props.name}</p>
            <p>Ingredients:{props.ingredients}</p>
            <p>Steps:{props.steps}</p>
            <img src={props.images} alt= ""/>
            <hr/>
        </div>
    )
}
export default Foods;