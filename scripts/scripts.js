document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.user-account');
    console.log(dropdowns)

    dropdowns.forEach((dropdown) => {
        // Listen for the Bootstrap dropdown hide event
        dropdown.addEventListener('hide.bs.dropdown', (event) => {
            event.preventDefault(); // Prevent immediate hiding of the dropdown

            const menu = event.currentTarget.lastElementChild; // Get the dropdown menu
            console.log(menu)
            menu.classList.add('closing'); // Add the 'closing' class for the slide-out animation

            // Wait for the animation to complete before hiding the dropdown
            menu.addEventListener('animationend', () => {
                menu.classList.remove('closing'); // Remove the 'closing' class
                menu.classList.remove('show'); // Remove the 'show' class to hide the dropdown
                menu.style.display = ''; // Reset the display property
            }, { once: true });
        });
    });
});


function getCookie(cookieKey) {
 const searchKey = cookieKey + "="
 const cookies = decodeURIComponent(document.cookie);
 const cookieList = cookies.split(";")
 for (let i=0;i<cookieList.length;i++) {
     let c = cookielist[i].trimStart();
     if (c.indexOf(searchKey == 0)) {
         return c.substring(name.length, c.length);
     };
     
 };
 
 return ""
}

function checkLoginNavbar() {
    let isLoggedIn = getCookie("loggedIn");
    
    let noLogged = `<form action="./signup.html">
    <label for="acc-user-name">Username:</label><br/>
    <input type="text" id="acc-user-name" name="acc-user-name"/><br/><br/>
    <label for="acc-password">Password:</label><br/>
    <input type="text" id="acc-password" name="acc-password"/><br/><br/>
    <div class="btn-container">
        <button type="submit" onSubmit="simLogin()">Login</button>
        <button type="submit">Signup</button>
    </div>
</form>`;

    yesLogged = ``;

    if (isLoggedIn == "false" || isLoggedIn == "") {
        document.getElementById(lg-acc-drop).innerHTML = noLogged;
        document.getElementById(sm-acc-drop).innerHTML = noLogged;
    } else {
        document.getElementById(lg-acc-drop).innerHTML = yesLogged;
        document.getElementById(sm-acc-drop).innerHTML = yesLogged;
    }
}





