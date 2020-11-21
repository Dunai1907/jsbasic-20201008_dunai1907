import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = document.createElement('div');
    this.elem.classList.add('products-grid');
    this.elem.innerHTML = `
    <div class="products-grid__inner"></div>`;
    this.creatCard(products);
  }

  creatCard (products){
    for (let product of this.products){
      let productCard = new ProductCard(product);
      this.elem.querySelector('.products-grid__inner').insertAdjacentElement("afterbegin", productCard.elem); 
    }
   }

   updateFilter(filters){
   
    this.filters = Object.assign(this.filters, filters);
    this.elem.querySelector('.products-grid__inner').innerHTML = ''; 
    
    for (let product of this.products){
    
      if (this.filters.noNuts === true){
      if (product.nuts !== true){
        continue;
        }
      }
    
      if (this.filters.vegeterianOnly === true){
        if (product.vegeterian !== true){
          continue;
          }
      }
      
      if (this.filters.maxSpiciness <= 2){
        if (product.spiciness > 2){
          continue;
          }
      }

      if (this.filters.category === 'soups'){
        if (product.category !== 'soups'){
          continue;
          }
      }
      
      let productCard = new ProductCard(product);
      this.elem.querySelector('.products-grid__inner').insertAdjacentElement("afterbegin", productCard.elem);
      
    }
   }
}
