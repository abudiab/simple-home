import React from "react";
import RecentPost from "./RecentPost";

const RecentPosts = () => {
  const posts = [
    {
      title: "Keeping cooking simple",
      metadata: {
        img: "./img/food.jpg",
      },
    },
    {
      title: "Simplicity and work",
      metadata: {
        img: "./img/work.jpg",
      },
    },
    {
      title: "Simple decorations",
      metadata: {
        img: "./img/deco.jpg",
      },
    },
  ];
  return (
    <div className="sidebar-widget">
      <h2 className="widget-title">Recent posts</h2>

      {posts.map((post, index) => (
        <RecentPost key={index} {...post} />
      ))}
    </div>
  );
};

export default RecentPosts;
