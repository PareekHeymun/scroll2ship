import "../../styles/Card.css";
import { FaRegHeart as HeartIcon} from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import SignIn from "../../assets/images/SignIn.png"
export default function ProductCard({id,image=SignIn, name, price, description }) {
  const navigate=useNavigate()
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div className="card" onClick={handleClick}>
        <div className="Image">
            <img alt={name} src={image} height="200px" width="200px"/>
            <button>
                <HeartIcon size={"20px"}style={{position:"absolute", top:"10px",right:"5px"}}/>
            </button>
        </div>
        <div style={{ display: "flex", justifyContent:"space-between" }}>
          <p className="ProductName">{name}</p>
          <p>₹{price}</p>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
}
