import React from "react";
import FeaturedArticle from "./FeaturedArticle";
import Article from "./Article";
import "./main.css";

const Main = () => {
  const posts = [
    {
      title: "Keeping cooking simple",
      body: "Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.",
      metadata: {
        date: "July 19, 2019",
        comments: 3,
        img: "./img/food.jpg",
      },
    },
    {
      title: "Simplicity and work",
      body: "Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out.",
      metadata: {
        date: "July 12, 2019",
        comments: 3,
        img: "./img/work.jpg",
      },
    },
    {
      title: "Simple decorations",
      body: "A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before.",
      metadata: {
        date: "July 3, 2019",
        comments: 3,
        img: "./img/deco.jpg",
      },
    },
  ];
  return (
    <main role="main">
      <FeaturedArticle />

      {posts.map((post, index) => (
        <Article key={index} {...post} />
      ))}
    </main>
  );
};

export default Main;
