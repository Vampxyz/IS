// const products = document.querySelector("#products")
const buttonAdd = document.getElementById("addbtn")
const products = document.getElementById("products")
const allProducts = []

function addProduct() {
    const newProduct = {
        imageUrl: '',
        tags: addTags(),
        title: prompt('Digite o t tulo do seu novo produto:'),
        description: prompt('Digite a descri o do seu novo produto:'),
        title: prompt('Digite o título do seu novo produto:'),
        description: prompt('Digite a descrição do seu novo produto:'),
    }

    const productHTML = `
        <div class="product">
            <img src="${newProduct.imageUrl}" alt="" />
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

    // Adiciona o produto novo depois do último produto adicionado
    products.insertAdjacentHTML('beforeend', productHTML)

    allProducts.push(newProduct)
}

function addTags() {
    // Opções de tags
    const tagOptions = {
        1: ['Digite a primeira tag:'],
        2: ['Digite a primeira tag:', 'Digite a segunda tag:'],
        3: ['Digite a primeira tag:', 'Digite a segunda tag:', 'Digite a terceira tag:'],
    }

    // Converte para um número inteiro para percorrer o array
    const option = Number(prompt('Escolha a quantidade de tags que você deseja adicionar: \n1 - Add uma tag \n2 - Add duas tags \n3 - Add três tags'))

    // Armazena as tags
    const tags = []

    // Percorre a pergunta da opção escolhida
    for (const question of tagOptions[option]) {
        tags.push(prompt(question))
    }

    return tags
}
buttonAdd.addEventListener("click", addProduct)

console.log(products);