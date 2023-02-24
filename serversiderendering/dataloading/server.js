//since fetch only exists by default in browser, we need to use isomorphic-fetch to implement fetch on backend
import "isomorphic-fetch";
import express from "express";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import path from "path";
import fs from "fs";
import App from "./src/App";
import { InitialDataContext } from "./src/InitialDataContext";

global.window = {}; // avoid error: ReferenceError: window is not defined

const app = express();

//render build folder but don't render index.html
app.use(express.static("./build", { index: false }));

// mock data
const articles = [
  { title: "Article 1", author: "Author 1" },
  { title: "Article 2", author: "Author 2" },
  { title: "Article 3", author: "Author 3" },
];

app.get("/api/articles", (req, res) => {
  const loadedArticles = articles;
  res.json(loadedArticles);
});

// render app on server side twice:
// find what components need to load their data;
// then load that data on server and pass data to components through context provider
app.get("/*", async (req, res) => {
  const sheet = new ServerStyleSheet();

  const contextObj = { _isServerSide: true, _requests: [], _data: {} };

  renderToString(
    sheet.collectStyles(
      <InitialDataContext.Provider value={contextObj}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
    )
  );

  await Promise.all(contextObj._requests); // execute all data needs functions
  contextObj._isServerSide = false; // frontend will use property to tell if being rendered on server
  delete contextObj._requests; // will be sending contextObj to client, so don't need to send _requests

  const reactApp = renderToString(
    <InitialDataContext.Provider value={contextObj}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </InitialDataContext.Provider>
  );

  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(
      data
        .replace(
          '<div id="root"></div>',
          // pass data to client
          `<script>window.preloadedData = ${JSON.stringify(
            contextObj
          )};</script><div id="root">${reactApp}</div>`
        )
        .replace("{{styles}}", sheet.getStyleTags())
    );
  });
});

app.listen(8080, () => {
  console.log("Server is listening on port: 8080");
});
