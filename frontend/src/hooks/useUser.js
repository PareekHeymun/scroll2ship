import {useState,useEffect} from "react"
export default function useUser(){
    const [user,setUser]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:4000/api/auth/profile",{
            method:"GET",
            credentials:"include"
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => setUser(data.user))
        .catch(() => setUser(null));
    },[]);
    return user;
}