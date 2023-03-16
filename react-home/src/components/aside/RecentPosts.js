import React from "react";

const RecentPosts = () => {
  return (
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
  );
};

export default RecentPosts;
