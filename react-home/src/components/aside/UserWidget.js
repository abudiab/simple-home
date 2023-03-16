import React from "react";

const UserWidget = () => {
  return (
    <div className="sidebar-widget">
      <h2 className="widget-title">About me</h2>
      <img src="./img/about-me.jpg" alt="" className="widget-image" />
      <p className="widget-body">
        I find life better, and I'm happier, when things are nice and simple.
      </p>
    </div>
  );
};

export default UserWidget;
