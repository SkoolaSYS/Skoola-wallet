"use strict";
var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var input = document.querySelector("#input");
var quantity = 0;
input.value = quantity;
minus.addEventListener('click', function (event) {
    if (quantity > 0) {
        quantity--;
        input.value = quantity;
    }
});
plus.addEventListener('click', function (event) {
    quantity++;
    input.value = quantity;
});
