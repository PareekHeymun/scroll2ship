import Header from "../components/common/Header";
import ProductsDisplay from "../components/products/ProductsDisplay"
import Footer from "../components/common/Footer"
import useUser from "../hooks/useUser"
import "../styles/animations/pulse.css"
export default function LandingPage(){
    const user = useUser();
    return(
        <>
            <Header/>
            <p className="pulse" style={{fontFamily:"cursive",margin:"50px",marginBottom:"0px"}}>Hello {user?.name ? user.name + " !!" : "Bro !!"}</p>
            <ProductsDisplay/>
            <Footer/>
        </>
    )
}