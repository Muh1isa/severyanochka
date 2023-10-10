const value = document.querySelector(".text-price");
const input = document.querySelector("#price");
const list = document.querySelector('.product-list')

value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

const products = [ 
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/cream.png',
        price: 89.99,
        name: 'cream',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/milk.png',
        price: 69.99,
        name: 'milk',
        desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное ...',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/yegorka.png',
        price: 77.99,
        name: 'moloko',
        desc: 'Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/butter.png',
        price: 92.99,
        name: 'butter',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/yogurt.png',
        price: 29.99,
        name: 'yogurt',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        btnText: 'В корзину'
    },
    {
        id: 1,
        like: '/images/like.svg',
        img: '/images/yogurt.png',
        price: 29.99,
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
        <p class="product-price">${item.price}</p>
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

    const element = document.querySelectorAll("#el");

    for (let i = 0; i < element.length; i++){
        console.log(element[i]);
    }
    
})



// for (let i = 0; i < products.length; i++) {
//     list.innerHTML += `
//     <li>
//     <img src='${products[i].img}'>
//     </li>` 
// }