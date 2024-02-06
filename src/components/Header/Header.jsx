import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../../pages/Login/Login";
import "./Header.css";

const Header = () => {
  const { user } = useSelector((state) => state.login);
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
              <Link to="/cart">&#128722; Panier</Link>
            </div>
            <div className="darkmode">
              <button className="light">&#127765; Light Mode</button>
              <button className="dark">&#127761; Dark Mode</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
