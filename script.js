// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menu Items
    const menuItems = [
        {name: 'Grilled Salmon', price: '$29.99', desc: 'Fresh Atlantic salmon with herbs', img: './Img/Salmon.jpg'},
        {name: 'Beef Tenderloin', price: '$39.99', desc: 'Premium cut with red wine sauce', img: './Img/beef.jpg'},
        {name: 'Vegetarian Delight', price: '$24.99', desc: 'Seasonal vegetables with quinoa', img: './Img/vegis.jpg'},
        {name: 'Tiramisu', price: '$12.99', desc: 'Classic Italian dessert', img: './Img/moose.jpg'},
        {name: 'Grilled Salmon', price: '$29.99', desc: 'Fresh Atlantic salmon with herbs', img: './Img/Salmon.jpg'},
        {name: 'Vegetarian Delight', price: '$24.99', desc: 'Seasonal vegetables with quinoa', img: './Img/vegis.jpg'},
    ];

    const menuGrid = document.querySelector('.menu-grid');
    menuItems.forEach(item => {
        menuGrid.innerHTML += `
            <div class="menu-item">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <span class="price">${item.price}</span>
                <p>${item.desc}</p>
            </div>
        `;
    });

    // Blog Posts
    const blogPosts = [
        {title: 'New Seasonal Menu', date: 'March 15, 2023', excerpt: 'Discover our spring-inspired dishes...', img: './Img/season.jpg'},
        {title: 'Wine Pairing Event', date: 'April 2, 2023', excerpt: 'Join our exclusive wine tasting...', img: './Img/wine.jpg'},
    ];

    const blogGrid = document.querySelector('.blog-grid');
    blogPosts.forEach(post => {
        blogGrid.innerHTML += `
            <div class="blog-post">
                <img src="${post.img}" alt="${post.title}">
                <div class="blog-content">
                    <span class="date">${post.date}</span>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="#" class="btn">Read More</a>
                </div>
            </div>
        `;
    });

    // Booking Form Submission
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your reservation! We will confirm shortly.');
        this.reset();
    });
});