import Footer from '../common/Footer';
import Signin from "../../assets/images/SignIn.png";
import Button from '../common/Button'
import '../../styles/SignInForm.css'
import Title from '../../assets/images/AppTitle3D.png'
import { MdOutlineEmail as MailIcon } from "react-icons/md";
import { FaLock as Lock} from "react-icons/fa";
import {Link} from 'react-router-dom'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
export default function SignIn(){
    const Navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin =  async(e)=>{
        e.preventDefault();
        try{
            const res=await fetch("http://localhost:4000/api/auth/SignIn",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password}),
            })
            const data=await res.json();
            console.log("Login response:", data);
            if(res.ok){
                localStorage.setItem("token",data.token);
                alert("Login Successful");
                Navigate('/');
            }
            else{
                alert(data.message||"Login Failed");
            }
        }
        catch(err){
            alert("something went wrong")
        }
    }
    return(
        <>
            <div className='Body'>
                    <div style={{height:"500px",width:"275px"}}/>
                    <img src={Signin} alt="Cart and Mobile" style={{height:"600px",width:"500px",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",marginTop:"40px"}}/>
                    <div className="SignInBox" style={{}}>
                        <h1>Login</h1>
                        <div  className="SignInDetails">
                            <div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'Center'}}>
                                <p style={{fontSize:"20px", fontFamily:"sans-serif", marginRight:"2px"}}>Login to your </p>
                                <img src={Title} alt="Title" height="20px" width="120px"  />
                                <p style={{fontSize:"20px", fontFamily:"sans-serif", marginLeft:"2px"}}>account</p>
                            </div>
                            <p style={{fontSize:"20px",marginBottom:"10px", transform:'translateY(-30px)'}}>Enter your details below</p>
                            <form autoComplete="off" onSubmit={handleLogin}>
                                <div className='SignInInput'>
                                    <MailIcon size={20} style={{color:'#888'}}/>
                                    <input type="email" name="GmailId" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
                                </div>
                                <div className='SignInInput'>
                                    <Lock size={20} style={{color:'#888'}}/>
                                    <input type="password" name="Password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value);}}/>
                                </div>
                                <div style={{ marginTop: "20px", display:"flex",alignContent:"center" }}>
                                    <Button text="Sign In" type="submit" />
                                </div>
                            </form>
                            <span style={{marginTop:'20px'}}>
                                <p style={{display:'inline'}}>Don't have an account ?</p>
                                <p onClick={() => Navigate("/SignUp")} style={{
                                                                        display: "inline",
                                                                        fontWeight: "bold",
                                                                        marginLeft: "8px",
                                                                        color: "#E07575",
                                                                        cursor: "pointer",
                                                                        }}
                                >
                                Registering here
                                </p>
                            </span>
                        </div>
                    </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}