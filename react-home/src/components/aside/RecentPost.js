import React from "react";

const RecentPost = (props) => {
  const { title, metadata } = props;
  return (
    <div className="widget-recent-post">
      <h3 className="widget-recent-post-title">{title}</h3>
      <img src={metadata.img} alt="" className="widget-image" />
    </div>
  );
};

export default RecentPost;
