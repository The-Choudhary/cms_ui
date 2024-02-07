import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(){
    
const navigate = useNavigate();

    const [ name , setname ] = useState()
    const [ password , setpassword] = useState()
    // const navigate = useNavigate();
    

const form=(e)=>{

const id='aman';
const pass='12';

if (name ==id && password == pass){
    localStorage.setItem('Name', "aman");
    navigate("/");

}

else{
    alert('no gateway');
}
}



    return(
        <div className="body-white">

                <div className="login-logo">
                    <img src="https://icssms.stomer.in/img/core-img/logo-small.png"/>

                </div>
                    <h3 className="login-heading1">Jrsu institute</h3>

            <h3 className="login-heading2">User Login</h3>

            <div className="login-box">


                <div className="login-form">
                    <input className="login-form-data" type="text" placeholder="username" name="name" onChange={(e)=>setname(e.target.value)}/>
                    <br/>
                    <input className="login-form-data" type="password" placeholder="password" name="password" onChange={(e)=>setpassword(e.target.value)}/>
                    <br/>
                    <button className="login-button" onClick={form}>log in</button>
                </div>

            </div>

        </div>
    )
    
}