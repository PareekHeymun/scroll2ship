import { useState, useEffect } from "react";
import Card from "../common/Card";
const apiUrl = process.env.REACT_APP_API_URL;

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  return (
    <div style={{ margin:"50px", display: "flex", flexWrap: "wrap", gap: "100px", rowGap:"50px" }}>
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <Card
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          );
        })
      ) : (
        <p>Products Not found</p>
      )}
    </div>
  );
};

export default AllProducts;
