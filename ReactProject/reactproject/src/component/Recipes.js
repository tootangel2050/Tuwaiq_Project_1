import React from 'react'
import { Link , Outlet } from 'react-router-dom';
import recipes from './Data';

export default function Recipes() {
    return (
        <div style={{display: "flex"}}>
            {/* <div
            style={{
                borderRight: "solid 1px",
                padding: "1rem"
            }}
            >
                {recipes.map(recipe =>(
                    <Link
                    style={{display: "block",margin: "1rem 0"}}
                    to={`/recipe/${recipe.name}`}
                    key={recipe.name}
                    >
                        {recipe.name}
                        </Link>
                ))}
            </div> */}
            <Outlet />
        </div>

        
    );
}
