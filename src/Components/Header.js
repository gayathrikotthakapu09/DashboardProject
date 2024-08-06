import React, { useState } from "react";
import { FaBell, FaEnvelope, FaBars } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div className="navbar d-flex justify-content-between align-items-center p-3 ">
      <input
        type="text"
        placeholder="Search"
        className="form-control w-50"
      />
      <div className="d-block d-md-none">
        <FaBars className="text-secondary" onClick={toggleIcons} />
      </div>
      <div
        className={`navbar-icons d-none d-md-flex align-items-center ${
          showIcons ? "d-flex" : "d-none"
        } d-md-flex`}
      >
        <div className="icon-wrapperhh icon-bg-lolhh">
        <FaEnvelope className="text-secondary mx-2" />
        </div>

        <div className="icon-wrapperhh icon-bg-lolhh">
        <IoSettingsOutline className="text-secondary mx-2" />
        </div>
        <div className="icon-wrapperhh icon-bg-lolhh ">
        <FaBell className="text-secondary mx-2" />
        </div>
       
       
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPzAOB6d0BxKBBN7Kr5fCEwML4vGslJXX2w&s"
          alt="Logo"
          className="navbar-logo rounded-circle mx-2"
        />
      </div>
    </div>
  );
};

export default Header;
