import React from "react";

const Article = (props) => {
  const { title, body, metadata } = props;
  return (
    <article class="article-recent" key={props.key}>
      <div class="article-recent-main">
        <h2 class="article-title">{title}</h2>
        <p class="article-body">{body}</p>
        <a href="#" class="article-read-more">
          continue reading
        </a>
      </div>
      <div class="article-recent-secondary">
        <img src={metadata.img} alt="" class="article-image" />
        <p class="article-info">
          {metadata.date} | {metadata.comments} comments
        </p>
      </div>
    </article>
  );
};

export default Article;
