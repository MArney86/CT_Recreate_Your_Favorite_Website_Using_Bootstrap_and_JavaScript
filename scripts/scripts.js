if (sessionStorage.getItem("products") === null) {
    sessionStorage.setItem("products", JSON.stringify([
    {id: 1,
    name: "3D Model Alpha",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "vastkai",
    price: 19.99,
    image: "https://picsum.photos/400/250"},
    {id: 2,
    name: "3D Model Beta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "fandangoarroo",
    price: 29.99,
    image: "https://picsum.photos/200/480"},
    {id: 3,
    name: "3D Model Gamma",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "firedoaks",
    price: 9.99,
    image: "https://picsum.photos/400/250?random=2"},
    {id: 4,
    name: "3D Model Delta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "opossumexactly",
    price: 19.99,
    image: "https://picsum.photos/400/400"},
    {id: 5,
    name: "3D Model Epsilon",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "shadesoxacillin",
    price: 24.49,
    image: "https://picsum.photos/400/250?random=3"},
    {id: 6,
    name: "3D Model Zeta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "fandangoarroo",
    price: 1.99,
    image: "https://picsum.photos/300/450"},
    {id: 7,
    name: "3D Model Eta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "klemensadalbert",
    price: 4.99,
    image: "https://picsum.photos/298/500?"},
    {id: 8,
    name: "3D Model Theta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "scuffleeggnog",
    price: 19.49,
    image: "https://picsum.photos/400/400?random=2"},
    {id: 9,
    name: "3D Model Iota",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "shadesoxacillin",
    price: 9.99,
    image: "https://picsum.photos/150/450"},
    {id: 10,
    name: "3D Model Kappa",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "damaborthladd",
    price: 17.79,
    image: "https://picsum.photos/500/250"},
    {id: 11,
    name: "3D Model Lambda",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "vastkai",
    price: 19.09,
    image: "https://picsum.photos/448/220"},
    {id: 12,
    name: "3D Model Mu",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "criodeidh",
    price: 19.91,
    image: "https://picsum.photos/140/350"},
])); // Store the products in session storage
}

document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM to load
    setupNewsletterForm(); // Call the function to setup the newsletter form
    checkLoginNavbar(); // Check if the user is logged in and update the navbar based on response from checking cookies
});

function setupNewsletterForm() { //Add form submit event listener to the newsletter signup form
    const form = document.getElementById('newsletterForm'); // get signup form element from document by ID

    if(form) { 
        form.addEventListener('submit', function(e) { // add eventlistener for form submission
            e.preventDefault(); // prevent default submission behavior
            alert('successfully signed up!'); //display alert 
            form.reset(); // reset the form
        });
    }
}


function simLogin(event) {
    if (event) event.preventDefault();

    //Get the username from the form Input
    const usernameInput = document.getElementById("acc-user-name");
    if (usernameInput && usernameInput.value.trim() !== "") {
        document.cookie = "username=" + encodeURIComponent(usernameInput.value.trim()) + "; path=/; max-age=86400";
    }

    document.cookie = "loggedIn=true; path=/; max-age=86400"; // Set a cookie to simulate login
    checkLoginNavbar(); // Update the navbar to reflect the login status
    closeDropdowns();
}

function simLogout(event) {
    document.cookie = "loggedIn=false; path=/; max-age=86400"; // Set a cookie to simulate logout
    checkLoginNavbar(); // Update the navbar to reflect the login status
    closeDropdowns();
}

function simSignup(event) {
    // Prevent any default actions from the event
    if (event) event.preventDefault();
    // Redirect to signup.html with the values
    window.location.href = "signup.html";
}

function closeDropdowns() {
    // Bootstrap 5: remove .show from dropdowns and togglers
    document.querySelectorAll('.user-account .dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
    });
    document.querySelectorAll('.user-account .dropdown-toggler.show').forEach(toggler => {
        toggler.classList.remove('show');
        toggler.setAttribute('aria-expanded', 'false');
    });
}



function getCookie(cookieKey) { // gets the cookie value by key or returns empty string if not found
 const searchKey = cookieKey + "=" // The key to search for in the cookies and return the value later more easily
 const cookies = decodeURIComponent(document.cookie); // Get all cookies and decode them incase of special characters
 const cookieList = cookies.split(";") // Split the cookies into an array
 for (let i=0;i<cookieList.length;i++) { // Loop through the cookies
     let c = cookieList[i].trimStart();
     if (c.indexOf(searchKey) == 0) { // Check if the cookie starts with the search key
         return c.substring(searchKey.length, c.length); // Return the value of the cookie by removing the key if found
     };
     
 };
 
 return "" // Return empty string if not found
}

function checkLoginNavbar() { // checks login status and updates the navbar accordingly
    const isLoggedIn = getCookie("loggedIn"); // Get the value of the "loggedIn" cookie
    
    // define the HTML for the account dropdowns if not logged in
    let noLogged = `<form>
        <label for="acc-user-name">Username:</label><br/>
        <input type="text" id="acc-user-name" name="acc-user-name"/><br/><br/>
        <label for="acc-password">Password:</label><br/>
        <input type="text" id="acc-password" name="acc-password"/><br/><br/>
        <div class="btn-container d-flex">
            <button type="button" id="login-btn">Login</button>
            <button type="button" id="signup-btn">Signup</button>
        </div>
    </form>`;

    // define the HTML for the account dropdowns if logged in
    let yesLogged = `<ul>
        <li>
            <a href="profile.html" class="dropdown-item d-flex align-items-center gap-2"><span class="material-icons-outlined">manage_accounts</span>Profile</a>
        </li>
        <li>
            <a href="cart.html#wishlist" class="dropdown-item d-flex align-items-center gap-2"><span class="material-icons-outlined">stars</span>Wishlist</a>
        </li>
        <li>
            <a href="profile.html#order-history" class="dropdown-item d-flex align-items-center gap-2"><span class="material-icons-outlined">receipt_long</span>Orders</a>
        </li>
        <li>
            <a href="gallery.html#personal" class="dropdown-item d-flex align-items-center gap-2"><span class="material-icons-outlined">art_track</span>My Gallery</a>
        </li>
        <button type="button" class="dropdown-item d-flex align-items-center gap-2" id="logout-btn"><span class="material-icons-outlined">logout</span>Logout</button>
    </ul>`;

    document.getElementById("lg-acc-drop").innerHTML = (isLoggedIn == "true") ? yesLogged : noLogged;
    document.getElementById("sm-acc-drop").innerHTML = (isLoggedIn == "true") ? yesLogged : noLogged;

    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const logoutBtn = document.getElementById("logout-btn");
    if (loginBtn) loginBtn.addEventListener("click", simLogin);
    if (signupBtn) signupBtn.addEventListener("click", simSignup);
    if (logoutBtn) logoutBtn.addEventListener("click", simLogout);
}

function productReturnModal(productID) {
    const docModal = document.getElementById("productModal")
    const products= JSON.parse(sessionStorage.getItem("products"));
    const product = products.find(p => p.id === productID)
    docModal.innerHTML = `<div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">${product.name}}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body>
                <div class="row">
                    <div class="col-md-6">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                        <h5>${product.name}</h5>
                        <p>${product.description}</p>
                        <p>Artist: <span class="prodArt">${product.artist}</span></p>
                        <p>Compatible Software: ${product.compSoftware}</p>
                        <p>Price: $<span>${product.price.toFixed(2)}<span></p>
                        <button type="button" class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <p> all rights reserved to <span class="prodArt">${product.artist}<span> and <span class="text-warning">3DStore</span></p>
            </div>
        </div>
    </div>`;
    const modal = new bootstrap.Modal(docModal); //activate the modal
    modal.show(); // Show the modal
}

function addToCart(productID) {
    if (sessionStorage.getItem("customerCart") === null) {
        sessionStorage.setItem("customerCart", JSON.stringify([])); // Initialize the cart if it doesn't exist
    }
    const customerCart = JSON.parse(sessionStorage.getItem("customerCart"));
    
    if (customerCart.length > 0) {
        const existingProduct = customerCart.findIndex(item => item.id === productID); // Check if the product already exists in the cart
        if (customerCart[existingProduct] > -1) {
            customerCart[existingProduct].quantity += 1; // Increase quantity if product already exists in cart
        } else { //product does not exist in cart
            customerCart.push({id: productID, quantity: 1}); // Add new product to cart
        }
    } else { //cart is empty
        customerCart.push({id: productID, quantity: 1}); // Add new product to cart
    }
    sessionStorage.setItem("customerCart", JSON.stringify(customerCart)); // Save the cart back to session storage
    alert("Product added to cart!"); // Alert the user that the product has been added to the cart   
}
