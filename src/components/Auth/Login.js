import React, { useState} from "react";



export default function (props) {
const changeAuthMode = () =>{
  setAuthMode(authMode === "Login" ? "Signup" : "Login")
}


  let [authMode, setAuthMode] = useState("Login")
  if (authMode ==="Login") {
    return ( <div className="Auth-form-container">
            <form className="Auth-form">
             <div className="Auth-form-content">
                <h3 className="Auth-form-title">Login</h3>
                  <div className="form-group mt-3">
                    <label>Email Address</label>   
                      <input type="email" className="form-control mt-3" placeholder="Enter Email"/>
                       </div>
                        <div className="form-group mt-3">
                         <label>Password</label>
                           <input type="password" className="form-control mt-1" placeholder="Enter Password" />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                              <button type="submit"  className="btn btn-primary">
                                Login
                                </button>
                                 </div>
                                 <p className="forgot-password text-right mt-2">
                                    Forgot <a href="#">Password?</a>
                                    </p>
                                </div>
                                </form>
                                </div>
                                )

                                }
                        
                            return (
                              <div className="Auth-form-container">
                              <form className="Auth-form">
                               <div className="Auth-form-content">
                                  <h3 className="Auth-form-title">Signup</h3>
                                  <div className="text-center">
                                    Already Registered?{" "}
                                    <span className="link-primary" onClick={changeAuthMode}>
                                      Login
                                      </span>
                                      </div>
                                      <div className="form-group mt-3">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control mt-1" placeholder="e.g Joe Doe"/>
                                      </div>

                                    <div className="form-group mt-3">
                                      <label>Email Address</label>   
                                        <input type="email" className="form-control mt-3" placeholder="Enter Email"/>
                                         </div>
                                          <div className="form-group mt-3">
                                           <label>Password</label>
                                             <input type="password" className="form-control mt-1" placeholder="Enter Password" />
                                              </div>
                                              <div className="d-grid gap-2 mt-3">
                                                <button type="submit"  className="btn btn-primary">
                                                  Signup
                                                  </button>
                                                   </div>
                                                   <p className="forgot-password text-right mt-2">
                                                      Forgot <a href="#">Password?</a>
                                                      </p>
                                                  </div>
                                                  </form>
                                                  </div>



                                               )
                                            }