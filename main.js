
// function init() {
//   initStyling();
//   initEvents();
// }
//
// function initStyling() {
//   console.log("called init styling");
//   addAllPosts(products);
// }
//
// function initEvents() {
//
//   $("body").on("click", function () {
//     alert("my event is bound.");
//   })
//   console.log("called init events");
//
// }
//
// function addProducts(post, index, array) {
//   $("section").append(
//     "<article>" +
//     "<h3>" + post.title + "</h3>"
//     + "<p>" + post.content + "</p>"
//     + "<blockquote>" + post.author + "</blockquote>"
//     + "</article>"
//   );
// }
//
// function addAllPosts(postsData) {
//   postsData.forEach(addPost);
//
//   // postsData.forEach(function (item, index, array) {
//   //   $("section").append(
//   //     "<article>" +
//   //     "<h3>" + item.title + "</h3>"
//   //     + "<p>" + item.content + "</p>"
//   //     + "<blockquote>" + item.author + "</blockquote>"
//   //     + "</article>"
//   //   );
//   // });
// }





var productPage = {

  init: function () {
    productPage.initStyling();
    productPage.initEvents();

  },
  initStyling: function () {
    console.log("called init styling");
    productPage.addAllProducts(products);
  },
  initEvents: function () {
    console.log("called init events");
  },


  addProduct: function (product, index, array) {

      $("section").append(
        '<section>'+
        '<a href="rel"><img src="'+product.image+'"></a>' +
        '<div class="brand"> "'+product.brand+'"</div>' +
        '<p class="description">"'+product.description+'"</p>' +
        '<div class="sizes">"'+product.sizes+'"</div>' +
        '<div class="price"> "'+product.price+'"</div>' +
        '</section>'
      );

      var compiled = _.template(templates.product);
      $('section').append(compiled(product));

    },

    // partial application


addAllProducts: function (productData) {
  productData.forEach(productPage.addProduct);

},

$(document).ready(function () {
  // code goes here for page.
  productPage.init();
  // init();
});
