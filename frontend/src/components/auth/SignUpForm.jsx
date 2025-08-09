import Footer from "../common/Footer";
import SignUp from "../../assets/images/SignUp.png";
import Button from "../common/Button";
import "../../styles/SignUpForm.css";
import Title from "../../assets/images/AppTitle3D.png";
import { IoPerson as NameIcon } from "react-icons/io5";
import { MdOutlineEmail as MailIcon } from "react-icons/md";
import { FaLock as Lock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SignUpForm() {
  const Navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]=useState("buyer");
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/auth/SignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name:firstName+" "+lastName, email, password,role }),
      });
      const data = await res.json();
      console.log("Status:", res.status);
      console.log("Data:", data);
      if (res.ok) {
        alert("SignUp Successfully !!");
        Navigate("/SignIn");
      } else {
        alert(data.message || "SignUp Failed");
      }
    } catch (err) {
      alert("something went wrong");
    }
  };
  return (
    <>
      <div className="Body">
        <div style={{ height: "700px", width: "350px" }} />
        <img
          src={SignUp}
          alt="Cart and Laptop"
          style={{
            height: "700px",
            width: "450px",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        />
        <div
          className="SignUpBox"
          style={{
            height: "700px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <h1>Sign Up</h1>
          <div className="SignUpDetails">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "Center",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  marginRight: "2px",
                }}
              >
                Create Account to use{" "}
              </p>
              <img src={Title} alt="Title" height="20px" width="120px" />
            </div>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "50px",
                transform: "translateY(-30px)",
              }}
            >
              Enter your details below
            </p>
            <form autoComplete="off" onSubmit={handleSignUp}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="SignUpInput" style={{ width: "160px" }}>
                  <NameIcon size={20} style={{ color: "#888" }} />
                  <input name="FirstName" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}} />
                </div>
                <div className="SignUpInput" style={{ width: "160px" }}>
                  <NameIcon size={20} style={{ color: "#888" }} />
                  <input name="LastName" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
                </div>
              </div>
              <div className="SignUpInput">
                <MailIcon size={20} style={{ color: "#888" }} />
                <input type="email" name="GmailId" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="SignUpInput">
                <Lock size={20} style={{ color: "#888" }} />
                <input type="password" name="Password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <Button text="Sign Up" type="submit" />
              </div>
            </form>
            <span style={{ marginTop: "20px" }}>
              <p style={{ display: "inline" }}>Become a seller by</p>
              <p
                onClick={() => Navigate("/RegistrationForm")}
                style={{
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
        <Footer />
      </div>
    </>
  );
}
