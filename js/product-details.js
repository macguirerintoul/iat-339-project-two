document.addEventListener('DOMContentLoaded', function (event) {
    var productName = getQueryVariable('p');
    var productImage = getQueryVariable('i');

    var productNameElement = document.getElementById("product-name");
    var productImageElement = document.getElementById("product-image");

    productNameElement.innerHTML = productName;
    productImageElement.src = '.' + productImage;
})

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return decodeURI(pair[1]); }
    }
    return (false);
}