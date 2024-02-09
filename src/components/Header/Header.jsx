import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../../pages/Login/Login";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Header.css";

const Header = () => {
  const { user } = useSelector((state) => state.login);
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <h1>EZ Shopping</h1>
          </Link>
          <div className="right-nav">
            <div className="login">
              <Link to="/login">&#129489; {user.firstname}</Link>
            </div>
            <div className="cart">
              <Link to="/cart">&#128722;{totalQuantity} items</Link>
            </div>
            <ThemeSwitcher />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
