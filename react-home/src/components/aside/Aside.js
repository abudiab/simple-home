import React from "react";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-widget">
        <h2 className="widget-title">About me</h2>
        <img src="./img/about-me.jpg" alt="" className="widget-image" />
        <p className="widget-body">
          I find life better, and I'm happier, when things are nice and simple.
        </p>
      </div>

      <div className="sidebar-widget">
        <h2 className="widget-title">Recent posts</h2>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Keeping cooking simple</h3>
          <img src="./img/food.jpg" alt="" className="widget-image" />
        </div>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Simplicity and work</h3>
          <img src="./img/work.jpg" alt="" className="widget-image" />
        </div>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Simple decorations</h3>
          <img src="./img/deco.jpg" alt="" className="widget-image" />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
