import Error404Screen from './screens/Error404Screen';
import mealScreen from './screens/mealScreen';
import menuScreen from './screens/menuScreen';
import { parseRequestURL } from './utils';

const routes = {
  '/': menuScreen,
  '/product/:id': mealScreen,
};
const router = async () => {
  const request = parseRequestURL();
  const parseUrl = (request.resource ? `/${request.resource}` : '/')
        + (request.id ? '/:id' : '')
        + (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById('menu-products');
  main.innerHTML = await screen.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
