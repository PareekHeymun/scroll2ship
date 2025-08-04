import Footer from "../common/Footer";
import "../../styles/RegistrationForm.css";
import Register from "../../assets/images/Register.png";
import Button from "../common/Button";
import { IoPerson as NameIcon } from "react-icons/io5";
import { MdOutlineEmail as MailIcon } from "react-icons/md";
import { FaLock as Lock, FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import { BsShop as ShopIcon } from "react-icons/bs";
import { MdPlace as LocationIcon} from "react-icons/md";

export default function RegistrationForm() {
  return (
    <>
      <div className="Body">
        <div style={{ height: "700px", width: "400px" }} />
        <img
          src={Register}
          alt="Cart and Laptop"
          style={{ height: "700px", width: "400px", borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}
        />
        <div
          className="RegisterBox"
          style={{
            height: "700px",
            width: "450px",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <h1>Register</h1>
          <div className="RegisterDetails">
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
                  fontSize: "25px",
                  fontFamily: "sans-serif",
                  marginRight: "2px",
                }}
              >
                Start selling by Registering!!{" "}
              </p>
            </div>
            <form autoComplete="off">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="RegisterInput" style={{ width: "170px" }}>
                  <NameIcon size={20} style={{ color: "#888" }} />
                  <input name="FirstName" placeholder="First Name" />
                </div>
                <div className="RegisterInput" style={{ width: "170px" }}>
                  <NameIcon size={20} style={{ color: "#888" }} />
                  <input name="LastName" placeholder="Last Name" />
                </div>
              </div>
              <div className="RegisterInput">
                <ShopIcon size={20} style={{ color: "#888" }} />
                <input name="ShopName" placeholder="Shop Name" />
              </div>
              <div className="RegisterInput">
                <LocationIcon size={20} style={{ color: "#888" }} />
                <input name="ShopAddress" placeholder="Shop Address" />
              </div>
              <div className="RegisterInput">
                <PhoneIcon size={20} style={{ color: "#888" }} />
                <input name="PhNum" placeholder="Contact Number" />
              </div>
              <div className="RegisterInput">
                <MailIcon size={20} style={{ color: "#888" }} />
                <input type="email" name="GmailId" placeholder="Email" />
              </div>
              <div className="RegisterInput">
                <Lock size={20} style={{ color: "#888" }} />
                <input type="password" name="Password" placeholder="Password" />
              </div>
            </form>

            <Button text="Register" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
