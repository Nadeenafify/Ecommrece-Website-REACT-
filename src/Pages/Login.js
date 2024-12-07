import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Importing the auth instance
import { Helmet } from "react-helmet";
import {useMyContext} from "../ContextAPI/ContextAPI"

const AuthApp = () => {

  // -----------------------set data-------------------------------------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  //--------------------------------get data---------------------------
  const {Logout,Login,updateEmail}=useMyContext()
  const navigate = useNavigate();  

  //-----------------------------------------------------------------------
  // Sign up user
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         setUser(userCredential.user);
         Login()//set iis logged
         updateEmail(email)//set email to view at header
          navigate("/")//navigate to home
          setErrorMessage("");
       }   
    catch (error) 
    {
      Logout()//reset is logged
      updateEmail("")//reset email
      console.error("Error signing up:", error.message);
      setErrorMessage(error.message);
    }
  };
// ---------------------------------------------------------------------------------------------------------
  // Sign in user
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);   
       Login()
       updateEmail(email)
       navigate("/")
       setErrorMessage("");
      
    } 
    catch (error) {
      Logout()
      updateEmail("")
      console.error("Error signing in:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (

    <>
        
    <Helmet>
      <title>Login or Sign Up</title>
    </Helmet>
    <div className="container py-4">
      <div className="row">
   
         <h1 className="text-center">Login</h1>
          <div className="d-flex align-items-center gap-3 flex-column">
            <input
                 type="email"
                  placeholder="Email"
                  value={email}
                  className="w-25 rounded p-2 border-0"
                   onChange={(e) => setEmail(e.target.value)}
                   />
                  
                 <input
                    type="password"
                    placeholder="Password"
                    value={password}
                  className="w-25 rounded p-2 border-0"
                 onChange={(e) => setPassword(e.target.value)}
                />
           

              <div className="d-flex gap-2">
                   <button onClick={handleSignUp} className="p-1 rounded">Sign Up</button>
                     <button onClick={handleSignIn} className="p-1 rounded">Sign In</button>          
               </div>
               <p className="text-danger">
                {errorMessage}
                </p>

                
           
     
      </div>
      </div>
      </div>
    </>
  );
};

export default AuthApp;
