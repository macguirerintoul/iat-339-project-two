document.addEventListener('DOMContentLoaded', function (event) {
    var productName = getQueryVariable('p');
    var productImage = getQueryVariable('i');
    var productPrice = getQueryVariable('d');

    var productNameElement = document.getElementById("product-name");
    var productPriceElement = document.getElementById("price");
    var productImageElement = document.getElementById("product-image");

    productNameElement.innerHTML = productName;
    productPriceElement.innerHTML = "$" + productPrice;
    productImageElement.src = '.' + productImage;
})

// Function from https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var variables = query.split("&");
    for (var i = 0; i < variables.length; i++) {
        var pair = variables[i].split("=");
        if (pair[0] == variable) { return decodeURI(pair[1]); }
    }
    return (false);
}
