import { useEffect, useState } from "react";
import { Header_Image_URL } from "../utils/constants.js";
export const Header = () => {
  const [buttonName, setBtName] = useState("Login");
  useEffect(() => {
    console.log("Header useEffect");
  }, [buttonName]);
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={Header_Image_URL} alt="Food ordering Logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              buttonName === "Logout"
                ? setBtName("Login")
                : setBtName("Logout");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};
