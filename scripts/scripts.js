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

/* <ul class="dropdown-menu signed-in">
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
    </ul> */