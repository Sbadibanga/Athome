AtHome Resturant

1. Create folder Scrtucture
   1. create root folder as Ordering system
   2. Add client/frontend server/backend folder.
   3. create src foler in frontend.
   4. create index.html with heading Athome resturant in src
   5. run npm init in frontend folder
   6. npm install live-server
   7. add start command as live-server src --verbose in json file.
   8. run npm start(website starts to run on server)
2. Design Website
   1. Create style.css
   2. link style.css to index.html
   3. create div.grid-container
   4. create header, main and footer
   5. style html, body
   6. style grid-container, header, main and footer
3. CREate Static Menu page
   1. Create ul.products
   2. Create li
   3. create div.product
   4. add .prodocut-image, .product-name .product-price
   5. style ul.product and internal divs
   6. duplicate to show more products.
4. Render Dynamic Home Screen
   1. create data.js
   2. export an array of 6 products
   3. create screen/HomScreen.js
   4. export HomeScreen as an object with render() method
   5. Implement render()
   6. import data.js
   7. return products mapped to list inside an ul
   8. create app.js
   9. link it to index.html as module
   10. set main id to main_container
   11. create router() function
   12. set main_container innerHTML to homeScreen.render()
   13. set load evnent of window to router() function
5. Build Url Router
   1. create routes as route:screen object for home screen.
   2. create utils.js
   3. export parseRequestURL()
   4. set url as hash address split by slash.
   5. return resource, id and verb of url.
   6. update router()
   7. set request as parseRequestURL()
   8. build parsedUrl and compare with routes.
   9. if route exists render it, else render Error404
   10. create screens/Error404.js and render error message.
6. Create Node.JS server
   1. run npm init in root athome folder.
   2. npm install express
   3. create server.js
   4. add start command as node backend/server.js
   5. require express
   6. move data.js from frontend to backend
   7. create route for /api/products
   8. return products in data.js
   9. run npm start
7. Load Products Fron Backend
   1. edit menuScreen.js
   2. make render async
   3. fetch products from '/api/products' in render()
   4. make router() async and call await menuScreen.render()
   5. user cors on backend
8. Add Webpack
   1. cd frontend
   2. npm install -D webpack webpack-cli webpack-dev-server
   3. npm uninstall live-server
   4. "start": "webpack-dev-server --mode development --watch-content-base --open"
   5. move index.html, style.css and images to frontend folder
   6. rename app.js to index.js
   7. updaye index.html
   8. add <script src="main.js></script> before </body>
   9. npm start
   10. npm install axios
   11. change fetch to axios in menuScreen
9. Install Bavel for ES6 Syntax
   1. npm install -D babel core, clie, node, preset-env
   2. create .babelrc and set presets to @babel/preset-env
   3. npm install -D nodemon
   4. set start: nodemon --watch backend --exes babel-node backend/server.js
   5. convert require to import in server.js
   6. npm start
10. Install VSCode Extension
    1. JavaScript (ES6) code snippets
    2. ES7 React/Redux/graphQL/React-Native snippets
    3. Prettier - Code formatter
    4. HTMl&less grammar injections
    5. CSS Peek

npm audit fix --force
