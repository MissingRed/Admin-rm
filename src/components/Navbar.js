import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="wrapper">
        <button>
          <img src="icons/settings.svg" alt="sett" />
        </button>
        <button>
          <img src="icons/info.svg" alt="info" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
