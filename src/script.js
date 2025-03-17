// const products = document.querySelector("#products")
const buttonAdd = document.getElementById("addbtn")
const products = document.getElementById("products")
const allProducts = []


function addProduct() {
    
    // Add Tag
    function addTag() {
        // Tags
        let tags = []

        // Options
        opt = prompt("Escolha a quantidade de tags que você deseja adicionar: \n1 - Add uma tag \n2 - Add duas tags \n3 - Add três tags")

        // Tags
        switch (opt) {
            // case 1
            case "1":
                tags.push(prompt("Digite a primeira tag:"))
                break;

            // case 2
            case "2":
                tags.push(prompt("Digite a primeira tag:"), prompt("Digite a segunda tag:"))
                break;

            // case 3
            case "3":
                tags.push(prompt("Digite a primeira tag:"), prompt("Digite a segunda tag:"), prompt("Digite a terceira tag:"))
                break;
        }
        return tags
    }

    // Product
    let newProduct = {
        "image_url": "https://",
        "tags": addTag(),
        "title": prompt('Digite o título do seu novo produto:'),
        "description": prompt('Digite a descrição do seu novo produto:')
    }

    // Render
    products.innerHTML += `
                <div class="product">
                <img src="${newProduct.image_url}" alt="" />
                <div class="tag">
                ${newProduct.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="text">
                <h2>${newProduct.title}</h2>
                <p>${newProduct.description}</p>
                </div>
                <button>Acessar</button>
                </div>
                `

    // Storage
    allProducts.push(newProduct)
}
buttonAdd.addEventListener("click", addProduct)

console.log(products);