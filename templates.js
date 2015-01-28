var templates={};

templates.product=[
  '<article>',
  '<img src=<%= image %> />',
  '<div class="brand"><%= brand %></div>',
  '<p class="description"><%= description %></p>',
  '<div class="sizes"><%= sizes %> </div>',
  '<div class="price"><%= price %></div>',
  '</article>'
].join("");
