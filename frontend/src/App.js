import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import LandingPage from "./pages/LandingPage";
import Cart from "./components/cart/Cart";
import ErrorPage from './pages/ErrorPage';
function App()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/SignIn" element={<SignInForm/>}/>
        <Route path="/SignUp" element={<SignUpForm/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;