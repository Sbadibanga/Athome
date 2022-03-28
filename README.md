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
