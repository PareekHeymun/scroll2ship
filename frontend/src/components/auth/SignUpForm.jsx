import Footer from '../common/Footer';
import SignUp from "../../assets/images/SignUp.png";
import Button from '../common/Button';
import '../../styles/SignUpForm.css'
import Title from '../../assets/images/AppTitle3D.png'
import { IoPerson as NameIcon} from "react-icons/io5";
import { MdOutlineEmail as MailIcon } from "react-icons/md";
import { FaLock as Lock} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function SignUpForm(){
    const Navigate=useNavigate();
    return(
            <>
                    <div className='Body'>
                           <div style={{height:"700px",width:"350px"}}/>
                           <img src={SignUp} alt="Cart and Laptop" style={{height:"700px",width:"450px",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}/>
                            <div className="SignUpBox" style={{height:"700px",width:"500px",display:'flex',flexDirection:'column',gap:"60px",alignItems:'center'}}>
                                <h1>Sign Up</h1>
                                <div  className="SignUpDetails">
                                    <div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'Center'}}>
                                        <p style={{fontSize:"20px", fontFamily:"sans-serif", marginRight:"2px"}}>Create Account to use  </p>
                                        <img src={Title} alt="Title" height="20px" width="120px" />
                                    </div>
                                    <p style={{fontSize:"20px",marginBotton:"50px", transform:'translateY(-30px)'}}>Enter your details below</p>
                                    <form autoComplete="off">
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                             <div className='SignUpInput' style={{width:'160px'}}>
                                                < NameIcon size={20} style={{color:'#888'}}/>
                                                <input name="FirstName" placeholder='First Name'/>
                                            </div>
                                            <div className='SignUpInput' style={{width:'160px'}}>
                                                <NameIcon size={20} style={{color:'#888'}}/>
                                                <input name="LastName" placeholder='Last Name'/>
                                            </div>
                                        </div>
                                        <div className='SignUpInput'>
                                            <MailIcon size={20} style={{color:'#888'}}/>
                                            <input type="email" name="GmailId" placeholder='Email'/>
                                        </div>
                                        <div className='SignUpInput'>
                                            <Lock size={20} style={{color:'#888'}}/>
                                            <input type="password" name="Password" placeholder='Password'/>
                                        </div>
                                    </form>
                                    <Button text="Sign Up" />
                                    <span style={{marginTop:'20px'}}>
                                        <p style={{display:'inline'}}>Become a seller by</p>
                                        <p onClick={()=>Navigate('/RegistrationForm')} style={{display:'inline',fontWeight:'bold',marginLeft:'8px', color:'#E07575', cursor:'pointer'}}>Registering here</p>
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