import React from "react";

const FeaturedArticle = () => {
  return (
    <article class="article-featured">
      <h2 class="article-title">Finding simplicity in life</h2>
      <img src="./img/life.jpg" alt="" class="article-image" />
      <p class="article-info">July 23, 2019 | 3 comments</p>
      <p class="article-body">
        <strong>Life can get complicated really quickly</strong>, but it doesn't
        have to be! There are many ways to simplify your life,
        <a>a few of which we've explored in the past</a>. This week we're taking
        a bit of a approach though, in how you can find simplicity in the life
        you already living.
      </p>
      <a href="#" class="article-read-more">
        continue reading
      </a>
    </article>
  );
};

export default FeaturedArticle;
