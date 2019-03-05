document.addEventListener("DOMContentLoaded", function(event) {
  console.log('loaded');

  // Reference:
  // https://stackoverflow.com/questions/33724201/javascript-add-event-listener-to-all-buttons
  var addToCartButtons = document.getElementsByClassName("add-to-cart");

  /*
   * Add a click listener to each 'add to cart' button and respond.
   */
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function (event) {
      event.target.innerHTML = `added to cart`;
      event.target.classList.add("added");
    }, false);
  }
});
