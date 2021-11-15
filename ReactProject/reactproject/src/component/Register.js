import { Component } from "react";
class Register extends Component{
    render(){
        return(

            <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            {/*---- Include the above in your HEAD tag --------*/}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
            <div className="container">
              <br />  
              <p className="text-center" style={{backgroundColor:"white"}}>More bootstrap 4 components on <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a></p>
              <hr />
              <div className="card bg-light">
                <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                  <h4 className="card-title mt-3 text-center">Create Account</h4>
                  <p className="text-center">Get started with your free account</p>
                  
                  <p className="divider-text">
                    <span className="bg-light">OR</span>
                  </p>
                  <form>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                      </div>
                      <input name className="form-control" placeholder="Full name" type="text" />
                    </div> {/* form-group// */}
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                      </div>
                      <input name className="form-control" placeholder="Email address" type="email" />
                    </div> {/* form-group// */}
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                      </div>
                      <select className="custom-select" style={{maxWidth: '120px'}}>
                        <option selected>+971</option>
                        <option value={1}>+972</option>
                        <option value={2}>+198</option>
                        <option value={3}>+701</option>
                      </select>
                      <input name className="form-control" placeholder="Phone number" type="text" />
                    </div> {/* form-group// */}
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-building" /> </span>
                      </div>
                      <select className="form-control">
                        <option selected> Select job type</option>
                        <option>Designer</option>
                        <option>Manager</option>
                        <option>Accaunting</option>
                      </select>
                    </div> {/* form-group end.// */}
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                      </div>
                      <input className="form-control" placeholder="Create password" type="password" />
                    </div> {/* form-group// */}
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                      </div>
                      <input className="form-control" placeholder="Repeat password" type="password" />
                    </div> {/* form-group// */}                                      
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block"> Create Account</button>
                    </div> {/* form-group// */}      
                    <p className="text-center">Have an account? <a href>Log In</a> </p>                                                                 
                  </form>
                </article>
              </div> {/* card.// */}
            </div> 
            {/*container end.//*/}
            <br /><br />
            <article className="bg-secondary mb-3">  
              <div className="card-body text-center">
                <h3 className="text-white mt-3">Bootstrap 4 UI KIT</h3>
                <p className="h5 text-white">Components and templates  <br /> for Ecommerce, marketplace, booking websites 
                  and product landing pages</p>   <br />
                <p><a className="btn btn-warning" target="_blank" href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com  
                    <i className="fa fa-window-restore " /></a></p>
              </div>
              <br /><br />
            </article>
          </div>
        )
    }
}
export default Register