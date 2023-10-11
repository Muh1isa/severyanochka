const products = [ 
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/cream.png',
        price: 8,
        name: 'cream',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/milk.png',
        price: 6,
        name: 'milk',
        desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное ...',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/yegorka.png',
        price: 7,
        name: 'moloko',
        desc: 'Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/butter.png',
        price: 9,
        name: 'butter',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/yogurt.png',
        price: 2,
        name: 'yogurt',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/yogurt.png',
        price: 2,
        name: 'yogurt',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        btnText: 'В корзину'
    }
]


window.addEventListener('DOMContentLoaded', function() {
    let displayItems = products.map(function(item) {
        return `
        <li>
        <img src="${item.img}" class="product-img">
        <img src="${item.like}" class="like-btn">
        <p class="product-price">${item.price}$</p>
        <h3 class="product-name">${item.desc}</h3>
        <i class="fa-solid fa-star" style="color: #ff6633"></i>
        <i class="fa-solid fa-star" style="color: #ff6633"></></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i><br>
        <button class="card-btn">${item.btnText}</button>
        </li>
        ` 
    })
    displayItems = displayItems.join('')
    list.innerHTML = displayItems;    
})


const search = document.querySelector('#search')
const searchbtn = document.querySelector('#searchbtn')

searchbtn.addEventListener('click', function() {
    let displayItems = products.map(function(item) {
        if(search.value === item.name) {
            return `
            <li>
            <img src="${item.img}" class="product-img">
            <img src="${item.like}" class="like-btn">
            <p class="product-price">${item.price}$</p>
            <h3 class="product-name">${item.desc}</h3>
            <i class="fa-solid fa-star" style="color: #ff6633"></i>
            <i class="fa-solid fa-star" style="color: #ff6633"></></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i><br>
            <button class="card-btn">${item.btnText}</button>
            </li>
            `  
        }
    })
    displayItems = displayItems.join('')
    list.innerHTML = displayItems
})


const value = document.querySelector(".text-price");
const price = document.querySelector("#price");
const list = document.querySelector('.product-list')

value.textContent = price.value
price.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    products.map(function(item) {
        // let newPrice = Math.round(item.price)
        if(item.price > price.value) {
            list.innerHTML = ` 
            <li>
            <img src="${item.img}" class="product-img">
            <img src="${item.like}" class="like-btn">
            <p class="product-price">${item.price}$</p>
            <h3 class="product-name">${item.desc}</h3>
            <i class="fa-solid fa-star" style="color: #ff6633"></i>
            <i class="fa-solid fa-star" style="color: #ff6633"></></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i><br>
            <button class="card-btn">${item.btnText}</button>
            </li>
            `  
        }
    })
});
