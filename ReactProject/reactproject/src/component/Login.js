// import React from "react";

import { Component } from "react";



//           <div id="login">
//             <h3 className="text-center text-white pt-5">Login form</h3>
//             <div className="container" style={{textAlign: 'center'}}>
//               <div id="login-row" className="row justify-content-center align-items-center">
//                 <div id="login-column" className="col-md-6">
//                   <div id="login-box" className="col-md-12" style={{textAlign: 'left'}}>
//                     {/* <form id="login-form" class="form" action="" method="post"> */}
//                     <h3 className="text-center text-info">Login</h3>
//                     <div className="form-group">
//                       <h4 id="validationMessage" className="red" style={{display: 'none', textAlign: 'center', color: 'rgb(170, 13, 13)'}}>Enter user details first</h4>
//                       <h4 id="Wrong" className="red" style={{display: 'none', textAlign: 'center', color: 'rgb(170, 13, 13)'}}>User Data is wrong !!!</h4>
//                       <label htmlFor="username" className="text-info">Username:</label><br />
//                       <input type="text" name="username" id="username" className="form-control" />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="password" className="text-info">Password:</label><br />
//                       <input type="text" name="password" id="password" className="form-control" />
//                     </div>
//                     <div className="form-group">
//                       <br />
//                       <input type="submit" name="submit" id="sub" className="btn btn-info btn-md" />
//                       <div id="register-link" className="text-right">
//                         <a href="register.html" className="text-info">Get Account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
//                         <a href="index.html" className="text-info">Back to Home</a>
//                       </div>           
//                     </div>
//                     {/* </form> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>


  



class Login extends Component{
    render(){
        return(<div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <img src="https://png.pngtree.com/thumb_back/fw800/20170803/pngtree-Food-Menu-Fare-Meal-background-photo-869492.jpg" width="100%" id="icon" alt="User Icon" />
          </div>
          {/* Login Form */}
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
            <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
          </form>
          {/* Remind Passowrd */}
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>)
    }
}
export default Login