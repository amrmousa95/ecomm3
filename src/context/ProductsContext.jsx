import { createContext, useState } from "react";
import Cart from "../components/Cart";

export const ProductsContext = createContext();

function ProductsProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  let qty = 0;

  const getAllQuantity = () => {
    if (cartItems.length === 0) {
      return qty;
    } else {
      return cartItems.reduce((acc, item)=> acc + item.quantity, 0)
    }
  };

  const addToCart = (id)=>{
    let foundItem = cartItems.find((item)=>item.id===id)
    setCartItems((prevItems)=>{
        if(foundItem == null){
            return [...prevItems, {id, quantity:1}]
        } else {
        return prevItems.map((item)=>{
            if(item.id === id){
                return {...item, quantity:item.quantity + 1}
            } else {return item}
         })
  }})}

  const reduceQuantity = (id)=>{
    setCartItems((prevItems)=>{
      return prevItems.map((item)=>{
        if(item.id===id){
          return item.quantity > 1 ? {...item, quantity:item.quantity-1} : null
        }
        return item
      }).filter(Boolean)
    })
  }

  return (
    <ProductsContext.Provider
      value={{ handleShow, handleClose, getAllQuantity, addToCart, cartItems, reduceQuantity }}
    >
      {props.children}
      <Cart show={show} />
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
