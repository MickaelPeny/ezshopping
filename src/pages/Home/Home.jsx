import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import { addToCart } from "../../features/cartSlice";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart);

  const [selectedQuantity, setSelectedQuantity] = useState({});

  const handleAddToCart = (product) => {
    const quantity = selectedQuantity[product.id] || 1;
    dispatch(addToCart({ ...product, quantity: quantity }));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="Products-container">
        {products.map((product) => (
          <div key={product.id} className="Product">
            <img src={product.image} alt={product.title} />
            <div className="Product-details">
              <h3 className="Product-title">
                {product.title}
                <p className="Product-category">{product.category}</p>
              </h3>
              <p>{product.description}</p>
              <p className="Product-price">${product.price}</p>
              <div className="Quantity-selector">
                <label htmlFor={`quantity-${product.id}`}>Quantity :</label>
                <input
                  type="number"
                  id={`quantity-${product.id}`}
                  min="1"
                  value={selectedQuantity[product.id] || 1}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10) || 1;
                    setSelectedQuantity((prevQuantity) => ({
                      ...prevQuantity,
                      [product.id]: newQuantity,
                    }));
                  }}
                />
              </div>
              <button
                onClick={() => {
                  console.log(selectedQuantity);
                  {
                    handleAddToCart(product);
                  }
                }}
              >
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
