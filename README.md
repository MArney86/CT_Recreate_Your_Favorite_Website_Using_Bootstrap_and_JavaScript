# 3DStore - Bootstrap E-commerce Website

A modern, responsive e-commerce website built with Bootstrap 5 and JavaScript, showcasing 3D models, digital art, and creative content. This project demonstrates advanced web development techniques including dynamic content loading, shopping cart functionality, user authentication simulation, and responsive design.

## 🚀 Features

### Core Functionality

- **Responsive Navigation**: Dynamic Bootstrap navbar with dropdown menus
- **Shopping Cart**: Real-time cart management with visual badge indicators
- **User Authentication**: Simulated login/signup with session management
- **Product Catalog**: Dynamic product loading and filtering
- **Gallery System**: Image and video content organization
- **News System**: Dynamic article loading with categorization
- **Contact Forms**: Interactive contact and newsletter signup forms

### Technical Highlights

- **Real-time Cart Badge**: Red notification badge showing item count (displays "9+" for 9+ items)
- **Session Storage**: Persistent cart and user data across page reloads
- **Dynamic Content**: JavaScript-powered content loading and DOM manipulation
- **Responsive Design**: Mobile-first approach with Bootstrap grid system
- **Modern UI**: Dark theme with Material Icons and Font Awesome integration

## 📋 Prerequisites

- **Web Browser**: Modern browser with JavaScript enabled (Chrome, Firefox, Safari, Edge)
- **Local Server**: Python 3.x (for local development server) or any HTTP server
- **Text Editor**: VS Code, Sublime Text, or similar (for development)

## 🛠️ Installation

### Quick Start

1. **Clone or Download** the project files to your local machine
2. **Navigate** to the project directory in your terminal/command prompt
3. **Start a local server** using one of the following methods:

#### Option 1: Python HTTP Server (Recommended)

```bash
# Navigate to project directory
cd path/to/CT_Recreate_Your_Favorite_Website_Using_Bootstrap_and_JavaScript

# Start Python server (Python 3.x)
python -m http.server 8000

# For Python 2.x (if needed)
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 8000
```

#### Option 3: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

4. **Access the website** at `http://localhost:8000` in your browser

### Why a Local Server is Required

The website uses `sessionStorage` and `fetch` APIs that require an HTTP/HTTPS protocol to function properly. Opening files directly in the browser (`file://` protocol) will cause CORS errors and prevent JavaScript functionality from working correctly.

## 🎯 Usage Guide

### Navigation

- **Home**: Welcome page with hero banner and featured content
- **Market**: Browse and purchase 3D models with filtering options
- **Gallery**: Explore community-submitted images and videos
- **News**: Read site updates, market news, and community articles
- **Contact**: Get in touch and subscribe to newsletter
- **Profile**: Manage account settings and view order history (after login)

### Shopping Cart Features

1. **Adding Items**: Click "Add to Cart" on any product in the Market section
2. **Cart Badge**: Red notification badge appears on cart icon showing item count
3. **Viewing Cart**: Click the cart icon to view your current order
4. **Managing Items**: Remove individual items or clear entire cart
5. **Quantity Control**: Adjust item quantities directly in cart

### User Authentication

1. **Sign Up**: Create a new account with username, email, and password
2. **Login**: Access your account with stored credentials
3. **Profile**: View account information and order history
4. **Logout**: Clear session data and return to logged-out state

### Content Browsing

- **Market Categories**: New Releases, On Sale, Best Sellers
- **Gallery Sections**: New Images, New Videos, Popular Submissions
- **News Categories**: Site Activity, Market News, Community Happenings

## 🏗️ Technology Stack

### Frontend Framework

- **Bootstrap 5.3.5**: Responsive CSS framework for layout and components
- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling and responsive design enhancements

### JavaScript Libraries & APIs

- **Vanilla JavaScript (ES6+)**: Core functionality and DOM manipulation
- **Bootstrap JavaScript**: Interactive components (dropdowns, modals, carousel)
- **Font Awesome 6**: Icon library for UI elements
- **Google Fonts**: Typography (Open Sans, Roboto)
- **Material Icons**: Google's material design icon set

### Data Management

- **sessionStorage**: Client-side data persistence for cart and user data
- **JSON**: Data format for products, news, gallery items, and user information
- **Dynamic Content Loading**: JavaScript-powered content rendering

### Development Tools

- **Python HTTP Server**: Local development server
- **VS Code**: Recommended development environment
- **Git**: Version control (optional)

## 📁 Project Structure

```
├── index.html              # Homepage
├── market.html             # Product catalog
├── gallery.html            # Image/video gallery
├── news.html               # News and articles
├── contact.html            # Contact information
├── profile.html            # User profile management
├── cart.html               # Shopping cart
├── login.html              # User login
├── signup.html             # User registration
├── favicon.ico             # Site favicon
├── README.md               # Project documentation
├── css/
│   └── styles.css          # Custom styling
├── scripts/
│   ├── scripts.js          # Main JavaScript functionality
│   └── index.js            # Additional scripts
├── images/
│   ├── logo.png            # Site logo
│   └── main-banner.png     # Hero banner image
└── fonts/                  # Custom font files (if any)
```

## ⚙️ Key JavaScript Features

### Cart Management System

```javascript
// Add item to cart
function addCartItem(productId, quantity = 1)

// Remove item from cart
function removeCartItem(cartIndex)

// Clear entire cart
function clearCart()

// Update cart badge display
function updateCartBadge()
```

### Dynamic Content Loading

- **Products**: Loaded from sessionStorage with fallback data
- **News Articles**: Dynamic article rendering with categories
- **Gallery Items**: Image and video content organization
- **User Data**: Session-based user information management

### Responsive Navigation

- **Dropdown Menus**: Bootstrap-powered navigation with custom styling
- **Search Functionality**: Integrated search form in navigation
- **Mobile Navigation**: Collapsible menu for mobile devices
- **Cart Badge**: Real-time notification system

## 🎨 Design Features

### Visual Design

- **Dark Theme**: Professional dark color scheme
- **Consistent Typography**: Open Sans and Roboto font families
- **Material Design**: Google Material Icons integration
- **Responsive Cards**: Uniform product, gallery, and news card layouts

### User Experience

- **Mobile-First**: Responsive design optimized for all screen sizes
- **Intuitive Navigation**: Clear menu structure and breadcrumbs
- **Visual Feedback**: Hover effects, transitions, and interactive elements
- **Loading States**: Smooth content transitions and loading indicators

## 🔧 Customization

### Adding New Products

1. Edit the products array in `scripts/scripts.js`
2. Follow the existing product object structure:

```javascript
{
    id: number,
    name: "Product Name",
    description: "HTML description",
    compSoftware: "Compatible software",
    artist: "Artist name",
    price: number,
    image: "image URL"
}
```

### Styling Modifications

- Edit `css/styles.css` for custom styling
- Bootstrap classes can be overridden with custom CSS
- Color scheme can be modified using CSS custom properties

### Adding New Pages

1. Create new HTML file following existing structure
2. Include necessary Bootstrap and custom CSS/JS
3. Add navigation links in all navbar instances
4. Implement page-specific JavaScript functionality

## 🐛 Troubleshooting

### Common Issues

**Cart badge not updating:**

- Ensure you're running the site on a local server (not file://)
- Check browser console for JavaScript errors
- Verify sessionStorage is enabled in browser

**Dropdown menus not working:**

- Confirm Bootstrap JavaScript is loaded
- Check for conflicting CSS or JavaScript
- Ensure proper Bootstrap markup structure

**Images not loading:**

- Verify image paths are correct
- Check if images exist in the images/ directory
- Ensure server has proper MIME type configuration

**JavaScript functionality broken:**

- Use browser developer tools to check console errors
- Verify all script files are loading properly
- Check for syntax errors in custom JavaScript

## 📱 Browser Compatibility

- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+ ✅

## 📄 License & Credits

### Assets
- **Favicon**: Thumbs up favicon by Dave Gandy from [Flaticon](https://www.flaticon.com/free-icons/thumbs-up)
- **Images**: Placeholder images from [Picsum Photos](https://picsum.photos/)
- **Icons**: Material Icons by Google, Font Awesome by Fonticons

### Dependencies
- **Bootstrap**: MIT License
- **Font Awesome**: Font Awesome Free License
- **Google Fonts**: Open Font License

## 🚀 Possible Future Enhancements

- **Backend Integration**: Connect to real database and API
- **Payment Processing**: Integrate payment gateway (Stripe, PayPal)
- **User Reviews**: Product review and rating system
- **Advanced Search**: Full-text search with filters
- **Real-time Chat**: Customer support integration
- **Analytics**: User behavior tracking and analytics
- **PWA Support**: Progressive Web App capabilities

---

**Author**: Matthew Arney  
**Year**: 2025  
**Framework**: Bootstrap 5 + Vanilla JavaScript