// ======================= Mock Data  =======================
const products = [
    {
        id: 1,
        name: 'سرير كلاسيكي فاخر',
        price: 3200,
        category: 'سرير',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'دولاب زاوية ذكي',
        price: 5500,
        category: 'دولاب',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'طقم غرفة نوم متكامل',
        price: 9800,
        category: 'غرف نوم',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'تسريحة عصرية بمرآة LED',
        price: 1800,
        category: 'تسريحة',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop'
    },
    {
        id: 5,
        name: 'سرير مودرن مع تخزين',
        price: 4100,
        category: 'سرير',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop'
    },
    {
        id: 6,
        name: 'غرفة نوم أطفال',
        price: 7500,
        category: 'غرف نوم',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop'
    }
];


// ======================= Functions to Display Products =======================

function displayProducts(productsList) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return; 

    let productsHTML = '';
    productsList.forEach(product => {
        productsHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price.toLocaleString()} ريال</p>
                </div>
            </div>
        `;
    });
    productsGrid.innerHTML = productsHTML;
}


// ======================= Mobile Menu Toggle =======================
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// ======================= Scroll Animation (Intersection Observer) =======================
const scrollElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1
});

scrollElements.forEach(el => {
    observer.observe(el);
});


// ======================= Run Functions on Page Load =======================
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});