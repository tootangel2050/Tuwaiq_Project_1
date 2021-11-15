// import logo from './logo.svg';
import React, { Component } from "react"
import './App.css';
import {Outlet, Link} from "react-router-dom";
import Index from './component/Index';
import recipes from './component/Data';
import Foods from './component/details';
const rootElement = document.getElementById("root");

// class App extends Component {
  // render(
  //   <BrowserRouter>
  //   <div className="App">
  //     <Index/>
  //     <Routes>
  //     <Route path="/Burger" element={<Foods name={recipes[0].name}  ingredients={recipes[0].ingredients} steps={recipes[0].steps} images={recipes[0].images}/>}/>
  //     <Route path="/Waffle" element={<Foods name={recipes[1].name}  ingredients={recipes[1].ingredients} steps={recipes[1].steps} images={recipes[1].images}/>}/>
  //     <Route path="/Biryani" element={<Foods name={recipes[2].name}  ingredients={recipes[2].ingredients} steps={recipes[2].steps} images={recipes[2].images}/>}/>
  //     <Route path="/SpringRolls" element={<Foods name={recipes[3].name}  ingredients={recipes[3].ingredients} steps={recipes[3].steps} images={recipes[3].images}/>}/>
  //     <Route path="/Sambosa" element={<Foods name={recipes[4].name}  ingredients={recipes[4].ingredients} steps={recipes[4].steps} images={recipes[4].images}/>}/>
  //     <Route path="/Mento" element={<Foods name={recipes[5].name}  ingredients={recipes[5].ingredients} steps={recipes[5].steps} images={recipes[5].images}/>}/>

  //     </Routes>
    
  //   </div>
  //   </BrowserRouter>
  //   rootElement 
  // );


  function App() {
    return (
        <div> <h1>Food Recipes</h1>
          <Link to="/recipes">Recipes</Link> |{""}        
          <Outlet />
          </div>
    );

  

}
export default App

