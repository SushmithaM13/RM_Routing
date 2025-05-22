import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AuthContext=createContext();  //creating context

export const AuthProvider=({children})=>{  //providing context
    const[token,setToken]=useState(null);
    const navigate=useNavigate();

    const login=async(email, password)=>{
        try{
            const res=await axios.post('https://reqres.in/api/login',{email,password});
            setToken(res.data.token);
            navigate('/');
        }catch(err){
            alert('Login failed: '+err.message);
        }
    };

    const signUp=async(email,password)=>{
        try{
            const res=await axios.post('https://reqres.in/api/register',{email,password});
            setToken(res.data.token);
            navigate('/');
        }catch(err){
            alert('Sign up failed: '+err.message);
        }
    };

    const logout=()=>{
        setToken(null);
        navigate('/login')
    };

    return(
                        //isAuthenticated: Boolean(token) ==> If token exists, it returns true. Otherwise, false.
         <AuthProvider.provider value={{token,login,signUp,logout,isAuthenticated: Boolean(token)}}> 
            {children}
        </AuthProvider.provider>
    );

}

export const useAuth=()=>useContext(AuthContext);