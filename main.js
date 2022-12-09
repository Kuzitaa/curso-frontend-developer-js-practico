const menuEmail = document.querySelector('.navbar-email')
const burguerMenu = document.querySelector('.menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const orderMenu = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleOrderMenu)


function toggleDesktopMenu() {
    orderMenu.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    orderMenu.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleOrderMenu() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    orderMenu.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name: 'Flower pot',
    price: 10,
    image: 'https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})
productList.push({
    name: 'Seeds',
    price: 30,
    image: 'https://images.pexels.com/photos/938699/pexels-photo-938699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})
productList.push ({
    name:'Motorcycle',
    price: 1200,
    image: 'https://images.pexels.com/photos/13119038/pexels-photo-13119038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({
    name:'Cat',
    price: 1600,
    image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({
    name:'Shovel',
    price: 1500,
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({
    name:'Kids',
    price: 300,
    image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({
    name:'Hat',
    price: 2200,
    image: 'https://images.pexels.com/photos/8412792/pexels-photo-8412792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({
    name:'Tractor',
    price: 800,
    image: 'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({
    name:'Bag',
    price: 876,
    image: 'https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(arr) {
    for(product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg') 
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)