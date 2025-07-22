import '../styles/ErrorPage.css'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { useNavigate } from 'react-router-dom'
export default function ErrorPage(){
    const navigate=useNavigate();
    return(
        <>
            <Header/>
            <main className='ErrorPageBody'>
                <h1>404</h1>
                <h3>Oops!! Page Not Found</h3>
                <p>We're sorry, the page you're looking for doesn't exist or has been moved.
Try checking the URL or head back to the homepage. </p>
                <button onClick={()=>navigate('/')}>
                    Return to home page
                </button>
            </main>
            <Footer/>
        </>
    )
}