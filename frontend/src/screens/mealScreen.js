import { parseRequestURL } from "../utils";
import { getProduct } from "./api";

const mealScreen = {
  render: async() => {
    const request = parseRequestURL();
    const product = await getProduct(request.id);
    return `<h1>${product.name}</h1>`
  },
};

export default mealScreen;
