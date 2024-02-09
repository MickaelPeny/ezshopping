import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  adjustQuantity,
  removeFromCart,
  clearCart,
} from "../../features/cartSlice";
import "./Cart.css";
import "../Home/Home.css";

const Cart = () => {
  const products = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  console.log(products);
  console.log(user.firstname);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(adjustQuantity({ id: productId, quantity: newQuantity }));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem("cart");
  };

  const handleValidateCart = () => {
    const cartState = JSON.stringify(products);
    localStorage.setItem("cart", cartState);
  };

  return (
    <>
      <div className="top-infos">
        <h1 className="name">Hi {user.firstname} !</h1>
        <p>There are {products.length} items in your basket</p>
        <div className="btn">
          <button className="clear" onClick={handleClearCart}>
            Clear Basket
          </button>
        </div>
      </div>
      <div className="Products-container">
        {products.map((item) => (
          <div key={item.id} className="Product">
            <img src={item.image} alt={item.title} />
            <div className="Product-details">
              <div className="Product-title">
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
              <div className="Product-price">
                <p>${item.price}</p>
              </div>
              <div className="Quantity-selector">
                <label htmlFor="quantity">Quantity :</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                  min="1"
                />
              </div>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="btn">
        <button onClick={handleValidateCart}>Valider le panier</button>
      </div>
      <div className="fill"></div>
    </>
  );
};

export default Cart;
