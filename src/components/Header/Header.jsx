import React from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/Login/Login";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <h1>EZ Shopping</h1>
          </Link>
          <div>
            <Link to="/login">Nom</Link>
            <Link to="/cart">Panier</Link>
            <button>Dark Mode</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
