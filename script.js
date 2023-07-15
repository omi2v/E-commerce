const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


function addToCart(imageSrc, productName, price) {
  // Retrieve the cart element
  var cart = document.getElementById('cart');

  // Create a new row for the item
  var row = document.createElement('tr');

  // Create the cells for the item details
  var removeCell = document.createElement('td');
  var imageCell = document.createElement('td');
  var productCell = document.createElement('td');
  var priceCell = document.createElement('td');
  var quantityCell = document.createElement('td');
  var subtotalCell = document.createElement('td');

  // Create the remove link for the item
  var removeLink = document.createElement('a');
  removeLink.href = '#';
  removeLink.innerHTML = '<i class="fa fa-times-circle"></i>';
  removeLink.addEventListener('click', function() {
    // Remove the item from the cart when the remove link is clicked
    cart.removeChild(row);
  });

  // Set the image source
  var image = document.createElement('img');
  image.src = imageSrc;
  image.alt = '';

  // Set the product name
  var productNameText = document.createTextNode(productName);

  // Set the price
  var priceText = document.createTextNode(price);

  // Create the quantity input
  var quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = '1';

  // Update subtotal when the quantity changes
  quantityInput.addEventListener('change', function() {
    var quantity = parseInt(quantityInput.value);
    var subtotal = quantity * parseFloat(price);
    subtotalCell.innerHTML = '$' + subtotal.toFixed(2);
  });

  // Set the initial subtotal
  var subtotalText = document.createTextNode(price);

  // Append the elements to their respective cells
  removeCell.appendChild(removeLink);
  imageCell.appendChild(image);
  productCell.appendChild(productNameText);
  priceCell.appendChild(priceText);
  quantityCell.appendChild(quantityInput);
  subtotalCell.appendChild(subtotalText);

  // Append the cells to the row
  row.appendChild(removeCell);
  row.appendChild(imageCell);
  row.appendChild(productCell);
  row.appendChild(priceCell);
  row.appendChild(quantityCell);
  row.appendChild(subtotalCell);

  // Append the row to the cart
  cart.appendChild(row);
}

