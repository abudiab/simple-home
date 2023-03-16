import React from "react";
import UserWidget from "./UserWidget";
import RecentPosts from "./RecentPosts";

const Aside = () => {
  return (
    <aside className="sidebar">
      <UserWidget />

      <RecentPosts />
    </aside>
  );
};

export default Aside;
