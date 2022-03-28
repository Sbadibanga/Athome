import menuScreen from "./screens/menuScreen.js";
const router = () =>{
    const main = document.getElementById("menu-products");
    main.innerHTML = menuScreen.render();
}
window.addEventListener('load', router);