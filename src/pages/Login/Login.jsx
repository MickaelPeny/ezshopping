import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/loginSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  console.log(user);

  const [localUser, setLocalUser] = useState(
    user || { firstname: "", lastname: "", email: "" }
  );
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (user) {
      setLocalUser(user);
    }
  }, [user]);

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalUser({
      ...localUser,
      [name]: value,
    });

    if (name === "email") {
      if (!isValidEmail(value)) {
        setEmailError("Adresse e-mail non valide.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(localUser.email)) {
      setEmailError("Adresse e-mail non valide.");
      return;
    }
    dispatch(setUser(localUser));
    localStorage.setItem("login", JSON.stringify(localUser));
    setEmailError("");
  };

  return (
    <>
      <div className="top-infos">
        <h1>Hi {user.firstname} !</h1>
        <p>Customize your profile here</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="infos">
          <div className="firstname">
            <label htmlFor="firstname">Your firstname: </label>
            <input
              name="firstname"
              type="text"
              id="firstname"
              value={localUser.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="lastname">
            <label htmlFor="lastname">Your lastname: </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={localUser.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email"> Your email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={localUser.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="email-error">{emailError && <p>{emailError}</p>}</div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Login;
