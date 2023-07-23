// Array to store the cart items
var cartItems = [];

// Function to add an item to the cart
function addToCart(itemIndex) {
  var item = items[itemIndex];

  // Check if the item already exists in the cart
  var existingItem = cartItems.find(function (cartItem) {
    return cartItem.id === item.id;
  });

  if (existingItem) {
    // Item already exists in the cart, increment the quantity
    existingItem.quantity++;
  } else {
    // Item does not exist in the cart, add it with a quantity of 1
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  }

  // Update the cart count
  updateCartCount();

  // Update the cart items display
  updateCartItems();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  // Find the index of the item in the cart
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });

  if (itemIndex !== -1) {
    // Item found in the cart, remove it
    cartItems.splice(itemIndex, 1);

    // Update the cart count
    updateCartCount();

    // Update the cart items display
    updateCartItems();
  }
}

// Function to update the cart count
function updateCartCount() {
  var cartCountElement = document.getElementById('cart-count');
  var cartCount = 0;

  cartItems.forEach(function (item) {
    cartCount += item.quantity;
  });

  cartCountElement.textContent = cartCount;
}

// Function to update the cart items display
function updateCartItems() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(function (item) {
    var cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    var itemNameElement = document.createElement('span');
    itemNameElement.textContent = item.name;

    var itemPriceElement = document.createElement('span');
    itemPriceElement.textContent = '₹' + item.price;

    var removeBtnElement = document.createElement('button');
    removeBtnElement.classList.add('remove-btn');
    removeBtnElement.textContent = 'Remove';
    removeBtnElement.addEventListener('click', function () {
      removeFromCart(item.id);
    });

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartItemElement.appendChild(removeBtnElement);

    cartItemsElement.appendChild(cartItemElement);
  });
}

// Sample data for items
var items = [
  {
    id: 1,
    name: 'Shoe 1',
    price: 1961.00,
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/p/l/x/-original-imagg7tfyzdwphyp.jpeg?q=90',
  },
  {
    id: 2,
    name: 'Shoe 2',
    price: 2999.00,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVtYSUyMHNob2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },
  // Add more items as needed
  {
    id: 3,
    name: 'Shoe 3',
    price: 1199.00,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/3/j/-original-imagg5vxhmjyga3n.jpeg?q=70',
  },
  {
    id: 4,
    name: 'Shoe 4',
    price: 2999.00,
    image: 'https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/d/n/2/-original-imagk26u5nmdzfkz.jpeg?q=90&crop=false',
  },
  {
    id: 5,
    name: 'Shoe 5',
    price: 4999.00,
    image: 'https://rukminim1.flixcart.com/image/850/1000/xif0q/shoe/i/7/s/-original-imagg3aa33mtd8v5.jpeg?q=90',
  },
  {
    id: 6,
    name: 'Shoe 6',
    price: 4099.00,
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21819112/2023/4/14/fc4b48bd-5c2a-4ff2-89b1-97929c161abb1681462406645-Reebok-Men-Sports-Shoes-1701681462406291-1.jpg',
  },
  {
    id: 7,
    name: 'Shoe 7',
    price: 499.00,
    image: 'https://c.ndtvimg.com/2021-12/qpbu9otg_footwear650_625x300_29_December_21.jpg',
  },
  {
    id: 8,
    name: 'Shoe 8',
    price: 999.00,
    image: 'https://navbharattimes.indiatimes.com/thumb/95001251/stylish-sparx-shoes-for-men-95001251.jpg?imgsize=28414&width=1200&height=900&resizemode=75',
  },
];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(function (button, index) {
  button.addEventListener('click', function () {
    addToCart(index);
  });
});

// for navigating to other html pages
// 1.running section
document.getElementById('runningBtn').addEventListener('click', function() {
  window.location.href = 'running.html';
});

// 2.SPORTSTYLE section
document.getElementById('sportBtn').addEventListener('click', function() {
  window.location.href = 'sport.html';
});

// 3.apparel section
document.getElementById('apparelBtn').addEventListener('click', function() {
  window.location.href = 'apparel.html';
});

// 4.performance section
document.getElementById('performanceBtn').addEventListener('click', function() {
  window.location.href = 'performance.html';
});
