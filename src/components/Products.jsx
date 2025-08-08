import React, { useContext } from "react";
import products from "../data/products.json";
import { ProductsContext } from "../context/ProductsContext";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import "../App.css";

function Products() {
  const { addToCart } = useContext(ProductsContext);
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row g-3 mt-3">
        {products.map((product) => {
          return (
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 " key={product.id}>
              <div className="card h-100">

                <div style={{ backgroundColor: "#eee", position: "relative" }} className="text-center">
                  <img src={product.image} className="card-img-top my-image" alt="product" style={{ objectFit: "contain", height: "300px", width: "70%", margin: "auto", transition: ".5s" }} />
                  <IoIosHeartEmpty style={{ position: "absolute", top: "10px", right: "10px",cursor:"pointer", fontSize: "26px", backgroundColor: "#FFF", borderRadius: "50%", padding:"2px" }} />
                </div>

                <div className="card-body" style={{color: "#555" }}>
                  <p className="card-title text-truncate" style={{ whiteSpace: "nowrap", overflow: "hidden"}}>
                    {product.title}
                  </p>
                  <p className="clamp-description">
                    {product.description}
                  </p>
                  <p >$ {product.price}</p>

                  <button href="h" class="btn btn-success d-flex align-items-center justify-content-center gap-2 w-100" onClick={() => addToCart(product.id)}>
                    <BsCartPlus size={18} />
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
