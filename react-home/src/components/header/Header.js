import React from "react";
import "./header.css";
import Title from "./Title";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="container container-flex">
        <Title />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
