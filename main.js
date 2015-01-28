
var productPage = {

  init: function () {
    productPage.initStyling();
    productPage.initEvents();
    productPage.addAllProducts(products);
  },

  initStyling: function () {
    //productPage.addAllProcucts(products)
    productPage.renderAllProducts(products);
  },

  initEvents: function () {

      $('.form').on('submit', function(event){
      event.preventDefault();
      productPage.createProduct();
    });

    $('section').on('click', '.deleteProduct', productPage.deleteProduct);

  },

  createProduct: function(){
    var newProduct = {
      image: $('.form input[name="image"]').val(),
      brand: $('.form input[name="brand"]').val(),
      description: $('.form input [name="description"]').val(),
      sizes: $('.form input[name="sizes"]').val(),
      price: $('.form input[price="price"]').val(),

    };

    products.push(newProduct);
    productsPage.renderProduct(newProduct, products.indexOf(newProduct));
  },

  //updateProduct: function{

    //add code here




  deleteProduct: function(event){
    var productIndex = $(this).closest('article').data('index');

    console.log(productIndex);
    products.splice(productIndex, 1);

    $(this).closest('article').remove();
  },

  //replaces 'addProcut function' from previous notes, just changed name
  renderProduct: function (product, index, array){
    product.idx = index;
    var compiled = _.template(templates.product);

    console.log(compiled(product));
    $("section").prepend(compiled(product));

  },

  renderAllProducts: function (allProducts){
    //producsData.forEach(productsPage.renderProducts);
    _.each(allProducts, productPage.renderProduct);
  }

};

$(document).ready(function () {
  // code goes here for page.
  productPage.init();
  // init();
});
