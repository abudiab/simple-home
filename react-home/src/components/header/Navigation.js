import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul class="nav-list">
        <li class="nav-list-item">
          <a class="nav-link current-page" href="index.html">
            Home
          </a>
        </li>
        <li class="nav-list-item">
          <a class="nav-link" href="about-me.html">
            About Me
          </a>
        </li>
        <li class="nav-list-item">
          <a class="nav-link" href="recent-posts.html">
            Recent Posts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
