import "../../styles/Card.css";
import { FaRegHeart as HeartIcon} from "react-icons/fa";
export default function ProductCard({ image, name, price, description }) {
  return (
    <>
      <div className="card">
        <div className="Image">
            <img alt={name} src={image} height="200px" width="200px"/>
            <button>
                <HeartIcon size={"20px"}style={{position:"absolute", top:"10px",right:"5px"}}/>
            </button>
        </div>
        <div style={{ display: "flex", justifyContent:"space-between" }}>
          <p className="ProductName">{name}</p>
          <p>{price}</p>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
}
