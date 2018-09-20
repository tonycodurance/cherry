const Layout = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="../../dist/styles/output.css"
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`

export default Layout;