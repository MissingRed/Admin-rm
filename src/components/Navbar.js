import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="wrapper">
        <div className="title">
          <h2>Lavadoras M4</h2>
        </div>
        <div className="buttons">
          <button>
            <img src="icons/settings.svg" alt="sett" />
          </button>
          <button>
            <img src="icons/info.svg" alt="info" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
