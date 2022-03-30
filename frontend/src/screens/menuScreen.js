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
      return '<div>Error in getting data</div>';
    }
    const products = response.data;
    return `
        <ul class="products">
            ${products.map(
    (product) => `
            <li>
                <div class="product">
                  <a href="/#/product/${product.id}">
                    <img src="${product.image}" alt="${product.name}" />
                  </a>
                  <div class="product-name">
                    <a href="/#/product/"> ${product.name} </a>
                  </div>
                  <div class="product-price">£${product.price}</div>
                  <div class="desc">
                    <p>
                    ${product.descrip}
                    </p>
                  </div>
                </div>
            </li>
            `,
  ).join('\n')}
        `;
  },
};

export default menuScreen;
