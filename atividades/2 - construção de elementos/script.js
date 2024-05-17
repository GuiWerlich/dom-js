const products = [
    {
      name: "Camiseta",
      price: 29.99
    },
    {
      name: "Calça Jeans",
      price: 49.99
    },
    {
      name: "Sapatos",
      price: 59.99
    },
    {
      name: "Vestido",
      price: 39.99
    },
    {
        name: "Chapéu",
        price: 19.99,
      },
  ];
  

const productsList = document.querySelector('ul')

function renderProductList() {

    for (const item of products) {
        const listItem = document.createElement('li')
     
        const productName = document.createElement('h3')
        const productPrice = document.createElement('p')
        const addToCartButton = document.createElement('button')
     
        productName.innerText = item.name
        productPrice.innerText = item.price
        addToCartButton.innerText = "Adicionar ao carrinho"
     
        listItem.appendChild(productName)
        listItem.appendChild(productPrice)
        listItem.appendChild(addToCartButton)
     
        productsList.appendChild(listItem)

     }

}

const body = document.querySelector('body')
body.appendChild(renderProductList())







