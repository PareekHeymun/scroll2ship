import Header from '../common/Header';
import Signin from "../../assets/images/SignIn.png";
import '../../styles/SignInForm.css'
import Title from '../../assets/images/AppTitle3D.png'
export default function SignIn(){
    return(
        <>
            <div>
                <Header/>
            </div>
            <div className='Body'>
                    <img src={Signin} alt="Cart and Mobile" style={{height:"700px",width:"750px"}}/>
                    <div style={{height:"700px",width:"250px"}}/>
                    <div style={{height:"700px",width:"400px",display:'flex',alignItems:'center'}}>
                        <div  className="SignInDetails">
                            <div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'Center'}}>
                                <p style={{fontSize:"30px", fontFamily:"sans-serif", marginRight:"10px", transform:'translateY(-3px)'}}>Login to </p>
                                <img src={Title} alt="Title" height="150px" width="150px" />
                            </div>
                            <p style={{fontSize:"20px",marginBotton:"50px", transform:'translateY(-30px)'}}>Enter your details below</p>
                            <input name="GmailId" placeholder='Email'/>
                            <input type="password" name="Password" placeholder='Password'/>
                            <button id="SubmitButton"> Log In </button>
                            <span style={{marginTop:'20px'}}>
                                <p style={{display:'inline'}}>Don't have an account ?</p>
                                <p style={{display:'inline',fontWeight:'bold',marginLeft:'10px', color:'#E07575', cursor:'pointer'}}>Sign Up</p>
                            </span>
                        </div>
                    </div>
            </div>
        </>
    )
}