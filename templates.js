var templates={};

templates.product=[
  '<section>',
  '<img src=% = image%>/>',
  '<div class="brand"><%= brand%</div>',
  '<p class="description"><%= description%</p>',
  '<div class="sizes">< %=sizes% </div>',
  '<div class="price"><%= price %</div>',
  '</section>'

].join("");
