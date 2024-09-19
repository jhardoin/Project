document.querySelector('.viewcart').addEventListener('click', function() {
    alert('You are viewing cart');
});

document.querySelector('.process').addEventListener('click', function() {
    alert('Your cart is empty');
});

document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Item Added to Cart');
    });
});