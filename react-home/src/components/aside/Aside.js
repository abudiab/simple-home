import React from "react";
import UserWidget from "./UserWidget";
import RecentPosts from "./RecentPosts";
import "./aside.css";

const Aside = () => {
  return (
    <aside className="sidebar">
      <UserWidget />

      <RecentPosts />
    </aside>
  );
};

export default Aside;
