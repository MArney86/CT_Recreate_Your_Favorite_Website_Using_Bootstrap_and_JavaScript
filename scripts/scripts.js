document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM to load
    const dropdowns = document.querySelectorAll('.user-account'); // Select all dropdown elements with the class .user-account

    dropdowns.forEach((dropdown) => { // Loop through the dropdowns
        // Listen for the Bootstrap dropdown hide event
        dropdown.addEventListener('hide.bs.dropdown', (event) => {
            event.preventDefault(); // Prevent immediate hiding of the dropdown

            const menu = event.currentTarget.lastElementChild; // Get the dropdown menu
            menu.classList.add('closing'); // Add the 'closing' class for the slide-out animation

            // Wait for the animation to complete before hiding the dropdown
            menu.addEventListener('animationend', () => {
                menu.classList.remove('closing'); // Remove the 'closing' class
                menu.classList.remove('show'); // Remove the 'show' class to hide the dropdown
                menu.style.display = ''; // Reset the display property
            }, { once: true });
        });
    });

    // Check if the user is logged in and update the navbar based on response from checking cookies
    checkLoginNavbar();
});


function getCookie(cookieKey) {
 const searchKey = cookieKey + "="
 const cookies = decodeURIComponent(document.cookie);
 const cookieList = cookies.split(";")
 for (let i=0;i<cookieList.length;i++) {
     let c = cookieList[i].trimStart();
     if (c.indexOf(searchKey == 0)) {
         return c.substring(searchKey.length, c.length);
     };
     
 };
 
 return ""
}

function checkLoginNavbar() {
    let isLoggedIn = getCookie("loggedIn");
    console.log(isLoggedIn);
    
    let noLogged = `<form action="./signup.html">
        <label for="acc-user-name">Username:</label><br/>
        <input type="text" id="acc-user-name" name="acc-user-name"/><br/><br/>
        <label for="acc-password">Password:</label><br/>
        <input type="text" id="acc-password" name="acc-password"/><br/><br/>
        <div class="btn-container">
            <button type="submit" onClick="simLogin(event)">Login</button>
            <button type="submit">Signup</button>
        </div>
    </form>`;

    yesLogged = `<ul>
        <li>
            <a href="profile.html" class="dropdown-item"><span class="material-icons-outlined">manage_accounts</span>Profile</a>
        </li>
        <li>
            <a href="cart.html#wishlist" class="dropdown-item"><span class="material-icons-outlined">stars</span>Wishlist</a>
        </li>
        <li>
            <a href="profile.html#order-history" class="dropdown-item"><span class="material-icons-outlined">receipt_long</span>Orders</a>
        </li>
        <li>
            <a href="gallery.html#personal" class="dropdown-item"><span class="material-icons-outlined">art_track</span>My Gallery</a>
        </li>
        <button type="button" class="dropdown-item" id="logout-btn"><span class="material-icons-outlined">logout</span>Logout</button>
    </ul>`;

    if (isLoggedIn == "false" || isLoggedIn == "") {
        document.getElementById("lg-acc-drop").innerHTML = noLogged;
        document.getElementById("sm-acc-drop").innerHTML = noLogged;
    } else {
        document.getElementById("lg-acc-drop").innerHTML = yesLogged;
        document.getElementById("sm-acc-drop").innerHTML = yesLogged;
    }
}

function simLogin(event) {
    document.cookie = "loggedIn=true; path=/; max-age=86400"; // Set a cookie to simulate login
    checkLoginNavbar(); // Update the navbar to reflect the login status
}





