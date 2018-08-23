import express from 'express';
import React from 'react';
import App from '../client/app'
import Layout from '../client/layout'
import ReactDOMServer from 'react-dom/server'

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  const body = ReactDOMServer.renderToString(<App />);
  const title = 'Server side Rendering with Styled Components';

  res.send(
  Layout({
    body,
    title
  })
  );
});

app.listen(port);
console.log(`Serving at http://localhost:${port}`);