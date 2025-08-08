import React, { useContext } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { ProductsContext } from "../context/ProductsContext";
import products from "../data/products.json";

const Cart = ({ show }) => {
  const { handleShow, handleClose, cartItems, addToCart, reduceQuantity, getAllQuantity } = useContext(ProductsContext);
  return (
    <Offcanvas show={show} placement="end" onHide={() => handleClose()}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.length === 0 ? (
            <p> Cart is Empty</p>
          ) : (
            cartItems.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.id);
              if (!product) return null;
              return (
                <>
                  <div key={product.id} className="d-flex justify-content-between align-items-center border-bottom py-2" style={{color:"#888"}}>
                    <img src={product.image} alt="product-img" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                    <div className="ms-2 flex-grow-1">
                      <div>{product.title.split(" ").slice(0, 3).join(" ")}</div>
                      <div>
                        ${product.price} × {cartItem.quantity}
                      </div>
                      <div>Total: ${(product.price * cartItem.quantity).toFixed(0)}</div>
                    </div>
                    <div>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => {
                          reduceQuantity(product.id);
                        }}>
                        {" "}
                        -{" "}
                      </Button>
                      <span className="p-2"> {cartItem.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => {
                          addToCart(product.id);
                        }}>
                        +
                      </Button>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </Stack>
        <div className="mt-2">
          <h5 style={{color:"#888"}}>

            Total Amount : ${" "}
            {cartItems.reduce((acc, item) => {
              const product = products.find((ele)=>ele.id === item.id )
              if (!product) return acc
              else return acc + product.price * item.quantity;
              }, 0)
              .toFixed(0)}
          </h5>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
