import { useAuth } from "../context/AuthContext"
import { useState } from "react";

const Login=()=>{
    const {login}=useAuth();
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');

    return(
        <>
        <h2>Login</h2>
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/>
        <button onClick={()=>login(email,password)}>Login</button>
        </>
    )
}

export default Login;