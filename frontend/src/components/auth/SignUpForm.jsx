import Header from '../common/Header';
import Footer from '../common/Footer';
import SignUp from "../../assets/images/SignUp.png";
import '../../styles/SignUpForm.css'
import Title from '../../assets/images/AppTitle3D.png'
import { IoPerson as NameIcon} from "react-icons/io5";
import { MdOutlineEmail as MailIcon } from "react-icons/md";
import { FaLock as Lock} from "react-icons/fa";
export default function SignUpForm(){
    return(
            <>
                <div>
                    <Header/>
                </div>
                    <div className='Body'>
                           <div style={{height:"700px",width:"400px"}}/>
                           <img src={SignUp} alt="Cart and Laptop" style={{height:"700px",width:"500px",borderRadius:"20px"}}/>
                            <div className="SignUpBox" style={{height:"700px",width:"400px",display:'flex',flexDirection:'column',gap:"60px",alignItems:'center'}}>
                                <h1>Sign Up</h1>
                                <div  className="SignUpDetails">
                                    <div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'Center'}}>
                                        <p style={{fontSize:"20px", fontFamily:"sans-serif", marginRight:"8px", transform:'translateY(-2px)'}}>Create Account to use  </p>
                                        <img src={Title} alt="Title" height="125px" width="125px" />
                                    </div>
                                    <p style={{fontSize:"20px",marginBotton:"50px", transform:'translateY(-30px)'}}>Enter your details below</p>
                                    <form autoComplete="off">
                                        <div className='SignUpInput'>
                                            <NameIcon size={20} style={{color:'#888'}}/>
                                            <input name="Name" placeholder='Name'/>
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
                                    
                                    <button id="SubmitButton" style={{fontSize:"15px",fontWeight:"bold"}}> Sign Up </button>
                                    <span style={{marginTop:'20px'}}>
                                        <p style={{display:'inline'}}>Become a seller by</p>
                                        <p style={{display:'inline',fontWeight:'bold',marginLeft:'8px', color:'#E07575', cursor:'pointer'}}>Registering here</p>
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