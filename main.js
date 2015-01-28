
var productPage = {

  init: function () {
    productPage.initStyling();
    productPage.initEvents();
  },

  initStyling: function () {
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
    //  image: $('.form input[name="image"]').val(),
      brand: $('.form input[name="brand"]').val(),
      description: $('.form input [name="description"]').val(),
      sizes: $('.form input[name="sizes"]').val(),
      price: $('.form input[price="price"]').val(),

    };

    products.push(newProduct);
    productsPage.renderProduct(newProduct, products.indexOf(newProduct));
  },

  //  var thisIndex = $(this).closest('article').data('index');

  //  var updateProduct ={
    //   brand:$(this).closest('article').find('input.editBrand').val(),
    //   description:$(this).closest('article').find('input.editDescription').val(),
    //   sizes:$(this).closest('article').find('input.editSizes').val(),
    //   price:$(this).closest('article').find('input.editPrice').val(),
    //
    // }


 updateProduct: function(){
    //var newImage = prompt("new image", productImage);
    var newBrand = prompt("new brand", productBrand);
    var newDescription = prompt("new description", productDescription);
    var newSizes = prompt("newSizes", productSizes);
    var newPrice = prompt("newPrice", productPrice);

    var editProduct={
      //image: newImage;
      brand: newBrand,
      description: newDescription,
      size: newSizes,
      price: newPrice
  };
},

  deleteProduct: function(event){

    var productIndex = $(this).closest('article').data('index');

    console.log(productIndex);
    products.splice(productIndex, 1);

    $(this).closest('article').remove();
  },

  //replaces 'addProdcut function' from previous notes, just changed name
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

});
