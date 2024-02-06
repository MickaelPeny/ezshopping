import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  adjustQuantity,
  removeFromCart,
  clearCart,
} from "../../features/cartSlice";

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
  };

  const handleValidateCart = () => {
    const cartState = JSON.stringify(products);
    localStorage.setItem("cart", cartState);
  };

  return (
    <>
      <h1>Hi {user.firstname} !</h1>
      <p>There are {products.length} items in your basket</p>
      <button onClick={handleClearCart}>Clear Basket</button>
      <div>
        {products.map((item) => (
          <div key={item.id} className="Product">
            <img src={item.image} alt={item.title} />
            <div className="Product-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value, 10))
                }
                min="1"
              />
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <button onClick={handleValidateCart}>Valider le panier</button>
      </div>
    </>
  );
};

export default Cart;
