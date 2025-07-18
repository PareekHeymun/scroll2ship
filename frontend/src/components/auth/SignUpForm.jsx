import Header from '../common/Header';
import SignIn from "../../assets/images/SignIn.png";
import '../../styles/SignUpForm.css'
import Title from '../../assets/images/AppTitle3D.png'
export default function SignUpForm(){
    return(
            <>
                <div>
                    <Header/>
                </div>
                    <div className='Body'>
                           <img src={SignIn} alt="Cart and Mobile" style={{height:"700px",width:"750px"}}/>
                            <div style={{height:"700px",width:"250px"}}/>
                            <div style={{height:"700px",width:"400px",display:'flex',alignItems:'center'}}>
                                <div  className="SignUpDetails">
                                    <div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'Center'}}>
                                        <p style={{fontSize:"20px", fontFamily:"sans-serif", marginRight:"8px", transform:'translateY(-2px)'}}>Create Account to use  </p>
                                        <img src={Title} alt="Title" height="125px" width="125px" />
                                    </div>
                                    <p style={{fontSize:"20px",marginBotton:"50px", transform:'translateY(-30px)'}}>Enter your details below</p>
                                    <input name="Name" placeholder='Name'/>
                                    <input type="email" name="GmailId" placeholder='Email'/>
                                    <input type="password" name="Password" placeholder='Password'/>
                                    <button id="SubmitButton"> Sign Up </button>
                                    <span style={{marginTop:'20px'}}>
                                        <p style={{display:'inline'}}>Become a seller by</p>
                                        <p style={{display:'inline',fontWeight:'bold',marginLeft:'8px', color:'#E07575', cursor:'pointer'}}>Registering here</p>
                                    </span>
                                </div>
                            </div>
                    </div>
                </>
    )
}