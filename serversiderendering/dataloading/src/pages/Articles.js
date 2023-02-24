import React from "react";
import { useDataSSR } from "../useDataSSR";

export const Articles = () => {
  const articles = useDataSSR("articles", () => {
    try {
      console.log("No preloaded articles, fetching from API");
      return fetch("http://localhost:8080/api/articles").then((response) =>
        response.json()
      );
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <h1>Articles</h1>
      {articles &&
        articles.map((article) => (
          <div key={article.title}>
            <h3>{article.title}</h3>
            <p>by {article.author}</p>
          </div>
        ))}
    </>
  );
};
