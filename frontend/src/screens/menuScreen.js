import axios from 'axios';

const menuScreen = {
  render: async () => {
    const response = await axios({
      url: 'http://localhost:5000/api/products',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response || response.statusText !== 'OK') {
      return `<div>Error in getting data</div>`;
    }
    const products = response.data;
    return `
      <div class="row">
      <div class="section-title">
        <h2>Our Menu</h2>
      </div>
      </div>
        <ul class="products">
            ${products.map(
              (product) => `
            <li>
                <div class="product">
                  <a href="/#/product/${product.id}">
                    <img src="${product.image}" alt="${product.name}" />
                  </a>
                  <div class="product-name">
                    <a href="/#/product/${product.id}"> ${product.name} </a>
                  </div>
                  <div class="product-price">£${product.price}</div>
                </div>
            </li>
            `,
  ).join('\n')}
        `;
  },
};

export default menuScreen;
