import Footer from '../common/Footer';
import Signin from "../../assets/images/SignIn.png";
import Button from '../common/Button'
import '../../styles/SignInForm.css'
import Title from '../../assets/images/AppTitle3D.png'
import { MdOutlineEmail as MailIcon } from "react-icons/md";
import { FaLock as Lock} from "react-icons/fa";
import {Link} from 'react-router-dom'
export default function SignIn(){
    return(
        <>
            <div className='Body'>
                    <div style={{height:"500px",width:"350px"}}/>
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
                            <form autoComplete="off">
                                <div className='SignInInput'>
                                    <MailIcon size={20} style={{color:'#888'}}/>
                                    <input type="email" name="GmailId" placeholder='Email'/>
                                </div>
                                <div className='SignInInput'>
                                    <Lock size={20} style={{color:'#888'}}/>
                                    <input type="password" name="Password" placeholder='Password'/>
                                </div>
                            </form>
                            <Button text="Sign In"/>
                            <span style={{marginTop:'20px'}}>
                                <p style={{display:'inline'}}>Don't have an account ?</p>
                                <Link id="SignUpLink" to='/SignUp'>Sign Up</Link>
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