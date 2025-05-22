import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignUp=()=>{
    const {signUp}=useAuth();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    return(
        <>
        <h2>Signup</h2>
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/>
        <button onClick={()=>signUp(email,password)}>Sign Up</button>
        </>
    )
}

export default SignUp;