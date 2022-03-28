import data from '../data.js';
const menuScreen = {
    render: () =>{
        const {products} = data;
        return `
        <ul class="products">
            ${products.map( 
              product => `
            <li>
                <div class="product">
                  <a href="/#/product/${product.id}">
                    <img src="${product.image}" alt="${product.name}" />
                  </a>
                  <div class="product-name">
                    <a href="/#/product/"> ${product.name} </a>
                  </div>
                  <div class="product-price">${product.price}</div>
                  <div class="desc">
                    <p>
                    ${product.descrip}
                    </p>
                  </div>
                </div>
            </li>
            `).join('\n')}
        `
    }
}
export default menuScreen; 