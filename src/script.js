// const products = document.querySelector("#products")
const buttonAdd = document.getElementById("addbtn");
const buttonBuy = document.getElementById("buy");
const buttonsDelete = document.querySelectorAll(".delete");

const products = document.getElementById("products");

const allProducts = [
  // {
  //   imageUrl: "",
  //   tags: ["Alimentos"],
  //   title: "Coxinha",
  //   description: "Coxinha de frango com catupiry",
  //   price: "19,99",
  // },
];

function addProduct() {
  const newProduct = {
    imageUrl: prompt("Digite a URL da imagem do seu novo produto:"),
    tags: addTags(),
    title: prompt("Digite o título do seu novo produto:"),
    description: prompt("Digite a descrição do seu novo produto:"),
    price: prompt("Digite o preço do seu novo produto:"),
  };

  const productHTML = `
        <div class="product">
            <img src="${newProduct.imageUrl}" alt="" />
            <div class="tag">
                ${newProduct.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="text">
                <h2>${newProduct.title}</h2>
                <p>${newProduct.description}</p>
            </div>
            <p class="price">R$ ${newProduct.price}</p>
            <div class="buttons">
                <button class="edit"><i class="fi fi-rr-pencil"></i></button>
                <button class="buy">Comprar</button>
                <button class="delete"><i class="fi fi-rr-trash"></i></button>
            </div>
        </div>
    `;

  // Adiciona o produto novo depois do último produto adicionado
  products.insertAdjacentHTML("beforeend", productHTML);

  allProducts.push(newProduct);
  updateEditButtons();
  updateDeleteButton();
}

const tagInput = document.getElementById("tag-input");
const tagsContainer = document.getElementById("tags-container");
let selectedTags = [];

tagInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Impede o envio do formulário

    const newTag = tagInput.value.trim();
    if (newTag && !selectedTags.includes(newTag)) {
      selectedTags.push(newTag);
      updateTagsUI();
      tagInput.value = "";
    }
  }
});

function updateTagsUI() {
  tagsContainer.innerHTML = selectedTags.map(tag => `<span class="tag">${tag} <i onclick="removeTag('${tag}')">x</i></span>`).join("");
}

function removeTag(tag) {
  selectedTags = selectedTags.filter(t => t !== tag);
  updateTagsUI();
}

buttonAdd.addEventListener("click", addProduct);

function updateEditButtons() {
  const editButtons = document.querySelectorAll(".edit");

  editButtons.forEach((button, index) => {
    button.onclick = () => {
      // Produto atual
      const product = allProducts[index];

      // Loop pra editar
      let continueEditing = true;

      while (continueEditing) {
        const opt = Number(
          prompt(
            "O que você deseja editar: \n1 - Tag \n2 - Título \n3 - Descrição \n4 - Preço \n5 - Imagem \n6 - Sair e salvar"
          )
        );

        switch (opt) {
          case 1: // TAG
            // Verifica se product.tags existe e é um array
            if (!Array.isArray(product.tags)) {
              product.tags = [];
            }

            // Verificador de tags
            if (product.tags.length === 0) {
              alert("Este produto não tem tags para editar.");
              break;
            }

            // Exibe as tags disponíveis com índice
            let tagList = product.tags
              .map((tag, i) => `${i + 1} - ${tag}`)
              .join("\n");
            let tagIndex =
              Number(
                prompt(
                  `Escolha a tag para editar ou digite 0 para cancelar ou 100 pra adiconar uma nova tag:\n${tagList}`
                )
              ) - 1;

            if (tagIndex === 99) {
              // Adiciona uma nova tag

              let addNewTag = prompt("Digite a nova tag que deseja adicionar:");

              if (addNewTag) {
                product.tags.push(addNewTag);
              }
            } else if (
              // Verifica se o índice é válido

              tagIndex < 0 ||
              tagIndex >= product.tags.length ||
              isNaN(tagIndex)
            ) {
              break;
            } else {
              // Pergunta a nova tag

              let newTag = prompt(
                `Digite a nova tag para substituir "${product.tags[tagIndex]}":`
              );

              if (newTag) {
                product.tags[tagIndex] = newTag;
              }
            }

            // Atualiza as tags no HTML
            const productElement = button.closest(".product"); // Seleciona o produto certo
            const tagContainer = productElement.querySelector(".tag");
            tagContainer.innerHTML = product.tags
              .map((tag) => `<span>${tag}</span>`)
              .join("");

            break;

          case 2: // TITLE
            const newTitle = prompt(
              "Digite o novo título: ",
              product.title || product.title
            );

            product.title = newTitle;

            // Atualizar o Html com o novo titulo
            const titleElement = button
              .closest(".product")
              .querySelector(".text h2");

            titleElement.textContent = product.title;

            break;

          case 3: // DESCRIPTION
            const newDesc = prompt(
              "Digite a nova descrição: ",
              product.description || product.description
            );

            product.description = newDesc;

            // Atualizar o Html com a nova descrição
            const descElement = button
              .closest(".product")
              .querySelector(".text p");

            descElement.textContent = product.description;

            break;

          case 4: // PRICE
            const newPrice = prompt(
              "Digite o novo preço: ",
              product.price || product.price
            );

            product.price = newPrice;

            // Atualizar o Html com o novo preco
            const priceElement = button
              .closest(".product")
              .querySelector(".price");

            priceElement.textContent = `R$ ${product.price}`;

            break;

          case 5: // IMAGE
            const newImage = prompt(
              "Digite a url da nova imagem: ",
              product.imageUrl || product.imageUrl
            );

            product.imageUrl = newImage;

            // Atualizar o Html com a nova imagem
            const imageElement = button
              .closest(".product")
              .querySelector("img");

            imageElement.src = product.imageUrl;

            break;

          case 6: // SAIR
            continueEditing = false;
            break;

          default:
            continueEditing = false;
            break;
        }
      }
    };
  });
}

updateEditButtons();

function updateDeleteButton() {
  const deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach((button, index) => {
    button.onclick = () => {
      allProducts.splice(index, 1);

      // Remover do HTML
      const productElement = button.closest(".product");
      productElement.remove();
    }; //Button on click
  }); //Delete Buttons
}

updateDeleteButton();
