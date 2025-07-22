import { useNavigate } from 'react-router-dom';
import AppLogo from '../../assets/images/AppLogoTitleAndCaption3D.png';
import '../../styles/Footer.css'
export default function Footer(){
    const navigate=useNavigate();
    return(
        <>
            <div style={{height:"1200px",width:"100%",backgroundColor:"#141414ff",color:"white",display:"flex",flexDirection:"column",border:"0",position:"relative"}}>
                <img src={AppLogo} alt="App Logo with Caption" height='250px' width='250px'style={{position:"absolute",left:"50%",transform:'translateX(-50%)'}}></img>
                <p id="Caption">Your trusted online marketplace offering premium products with exceptional quality and service. We're committed to making shopping convenient, secure, and enjoyable for everyone.</p>
                <nav style={{display:'flex',flexDirection:'Column',transform:"translate(30px,200px)"}}>
                    <div style={{height:"parent",display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <h1>Quick Links</h1>
                        <p>About</p>
                        <p>Our story</p>
                        <p>Home</p>
                    </div>
                    <div style={{height:"parent",display:'flex',flexDirection:'column',aligncontent:'center',justifyContent:'center'}}>
                        <h1>Account</h1>
                        <p>Login/SignUp</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                    </div>
                    <div style={{height:"parent",display:'flex',flexDirection:'column',aligncontent:'center',justifyContent:'center'}}>
                        <h1>Customer Care</h1>
                        <p>Help Center</p>
                        <p>Size Guide</p>
                    </div>
                    <div style={{height:"parent",display:'flex',flexDirection:'column',aligncontent:'center',justifyContent:'center'}}>
                        <h1>Contact Info</h1>
                        <p>ecommercedevkriti@gmail.com</p>
                    </div>
                </nav>
                <h3 id="Copyrights">© 2025 Scroll 2 Ship. All rights reserved.</h3>
            </div>
        </>
    )
}