let kartochki = document.querySelector('.kartochki')
let korzinka = document.querySelector('.korzinka')
let totalPrice = document.querySelector('.totalPrice')

console.log(fetch('https://fakestoreapi.com/products?limit=10'))

fetch('https://fakestoreapi.com/products?limit=10')
    .then(response => response.json())
    .then(data => {
        genaratorProduct(data)
    })

function genaratorProduct(product) {
    kartochki.innerHTML=''
    product.forEach(element => {
        let divCard = document.createElement('div')
        divCard.classList.add('card')
        divCard.innerHTML = `
            <img src="${element.image}" alt="" class="img">
            <h2 class="title">${element.title}</h2>
            <p class="description">${element.description}</p>
            <p class="category"><span class="span">Категория:</span> ${element.category}</p>
            <p class="price">${element.price} $</p>
            <button class="btn"  onclick="addProduct('${element.title}', '${element.price}')">Купить</button>
        `
        kartochki.appendChild(divCard)
    });
}    
function addProduct(title, price) {
    // korzinka.innerHTML = ''
    korzinka.innerHTML = `
        <div class="tovar">
            <div class="product">
                    <h2 class="title">${title}</h2>
                    <p class="price">${price} $</p>
            </div>
            <div class="totalPrice">
                <p>Total: ${price}</p>
            </div>
        </div>
    `
}
