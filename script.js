/**
 * Client-Side Server JavaScript
 * Assignment 3
 * Student: Carlos Emanuel Aragundi Rivas
 * ID: 200559970
 */

const images = [
    { src: 'images/banana.jpg', thumbnail: 'images/banana.jpg', description: 'Banana' },
    { src: 'images/strawberry.jpeg', thumbnail: 'images/strawberry.jpeg', description: 'Strawberry' },
    { src: 'images/blueberry.jpg', thumbnail: 'images/blueberry.jpg', description: 'Blueberry' },
    { src: 'images/mango.jpg', thumbnail: 'images/mango.jpg', description: 'Mango' },
    { src: 'images/extras.jpg', thumbnail: 'images/extras.jpg', description: 'Extras' }
];

const featuredImage = document.getElementById('featured');
const caption = document.getElementById('caption');
const thumbnails = document.getElementById('thumbnails');

images.forEach((image, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.thumbnail;
    img.alt = `Thumbnail ${index + 1}`;
    img.addEventListener('click', () => {
        featuredImage.src = image.src;
        caption.textContent = image.description;
        document.querySelectorAll('li img').forEach(img => img.classList.remove('active'));
        img.classList.add('active');
    });
    if (index === 0) img.classList.add('active');
    li.appendChild(img);
    thumbnails.appendChild(li);
});

class Smoothie {
    constructor(name, size, ingredients, extras) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.extras = extras;
        this.price = this.calculatePrice();
    }

    calculatePrice() {
        let basePrice = 5;
        if (this.size === 'medium') basePrice += 2;
        if (this.size === 'large') basePrice += 4;

        basePrice += this.ingredients.length * 1;
        basePrice += this.extras.length * 1.5;

        return basePrice;
    }

    getDescription() {
        return `
            <h2>Order Summary</h2>
            <p>Name: ${this.name}</p>
            <p>Size: ${this.size}</p>
            <p>Ingredients: ${this.ingredients.join(', ')}</p>
            <p>Extras: ${this.extras.join(', ')}</p>
            <p>Total Price: $${this.price.toFixed(2)}</p>
        `;
    }
    
}


function orderSmoothie() {
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(el => el.value);
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(el => el.value);

    const smoothie = new Smoothie(name, size, ingredients, extras);
    document.getElementById('orderSummary').innerHTML = smoothie.getDescription();
    document.getElementById('orderSummary').style.opacity = 1; // Make the order summary visible.
}
