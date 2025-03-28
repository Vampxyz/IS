// product
const buttonAdd = document.getElementById("addbtn");
const buttonBuy = document.getElementById("buy");
const buttonsDelete = document.querySelectorAll(".delete");
const products = document.getElementById("products");

const allProducts = [];

// Modal product
const modalBg = document.getElementById("bg-product");
const closeModalProduct = document.getElementById("close-modal-product");
const submitProduct = document.getElementById("submit-product");

// Type of image modal
const fileImg = document.getElementById("file-img");
const urlImg = document.getElementById("url-img");

// Input modal
const fileInput = document.getElementById("file-input");
const urlInput = document.getElementById("url-input");
const title = document.getElementById("title-input");
const description = document.getElementById("desc-input");
const price = document.getElementById("price-input");

// Tag input modal
const tagInput = document.getElementById("tag-input");
const tagContainer = document.getElementById("tag-container");
const tagHidden = document.getElementById("hidden-tags");
let tags = [];

// Modal edit
const editBg = document.getElementById("bg-edit");
const closeModalEdit = document.getElementById("close-modal-edit");

// Open modal
buttonAdd.addEventListener("click", () => {
  modalBg.style.display = "flex";
});
// Close modal
closeModalProduct.onclick = () => {
  modalBg.style.display = "none";
};

closeModalEdit.onclick = () => {
  editBg.style.display = "none";
};

// Image options
fileImg.onclick = () => {
  fileInput.style.display = "block";
  fileInput.style.borderColor = "#000";
  fileImg.style.fontWeight = "700";
  fileImg.style.color = "var(--dark-red)";

  urlInput.style.display = "none";
  urlInput.style.borderColor = "var(--gray)";
  urlImg.style.fontWeight = "400";
  urlImg.style.color = "black";
};
urlImg.onclick = () => {
  urlInput.style.display = "block";
  urlInput.style.borderColor = "#000";
  urlImg.style.fontWeight = "700";
  urlImg.style.color = "var(--dark-red)";

  fileInput.style.display = "none";
  urlInput.style.borderColor = "var(--gray)";
  fileImg.style.fontWeight = "400";
  fileImg.style.color = "black";
};

// Add product
submitProduct.addEventListener("click", () => {
  addProduct();

  urlInput.value = "";
  title.value = "";
  description.value = "";
  price.value = "";

  modalBg.style.display = "none";
});

function addProduct() {
  let imageUrl = urlInput.value;

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0]; // Obtém o arquivo
    imageUrl = URL.createObjectURL(file); // Cria uma URL temporária
  }

  const newProduct = {
    image: imageUrl,
    tags: [...tags],
    title: title.value,
    description: description.value,
    price: price.value,
  };

  const productHTML = `
        <div class="product">
            <img src="${newProduct.image}" alt="" />
            <div class="tag">
                ${tags.map((tag) => `<span>${tag}</span>`).join("")}
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

// Add tag
tagInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && tagInput.value.trim() !== "") {
    //Se a tecla pressionada for o ENTER e o input nao for vazio
    e.preventDefault();
    addTag(tagInput.value.trim());
    tagInput.value = "";
  }
});
function addTag(tag) {
  if (!tags.includes(tag)) {
    // Se a tag atual nao existir no array tags
    tags.push(tag);
    updateTags();
  }
}

// Update Tags
function updateTags() {
  tagContainer.innerHTML = "";
  tags.forEach((tag) => {
    const tagElement = document.createElement("div");
    tagElement.classList.add("tag");
    tagElement.textContent = tag;

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", () => removeTag(tag));

    tagElement.appendChild(removeButton);
    tagContainer.appendChild(tagElement);
  });

  tagHidden.value = tags.join(",");
}
// Remove Tag
function removeTag(tag) {
  tags = tags.filter((t) => t !== tag);
  updateTags();
}

// Edit product
function updateEditButtons() {
  const editButtons = document.querySelectorAll(".edit");
  
  editButtons.forEach((button, index) => {
    button.onclick = () => {
      editBg.style.display = "flex";
      // Produto atual
      const product = allProducts[index];

      // Loop pra editar
      // let continueEditing = true;

      // while (continueEditing) {
      //   const opt = Number(
      //     prompt(
      //       "O que você deseja editar: \n1 - Tag \n2 - Título \n3 - Descrição \n4 - Preço \n5 - Imagem \n6 - Sair e salvar"
      //     )
      //   );

      //   switch (opt) {
      //     case 1: // TAG
      //       // Verifica se product.tags existe e é um array
      //       if (!Array.isArray(product.tags)) {
      //         product.tags = [];
      //       }

      //       // Verificador de tags
      //       if (product.tags.length === 0) {
      //         alert("Este produto não tem tags para editar.");
      //         break;
      //       }

      //       // Exibe as tags disponíveis com índice
      //       let tagList = product.tags
      //         .map((tag, i) => `${i + 1} - ${tag}`)
      //         .join("\n");
      //       let tagIndex =
      //         Number(
      //           prompt(
      //             `Escolha a tag para editar ou digite 0 para cancelar ou 100 pra adiconar uma nova tag:\n${tagList}`
      //           )
      //         ) - 1;

      //       if (tagIndex === 99) {
      //         // Adiciona uma nova tag

      //         let addNewTag = prompt("Digite a nova tag que deseja adicionar:");

      //         if (addNewTag) {
      //           product.tags.push(addNewTag);
      //         }
      //       } else if (
      //         // Verifica se o índice é válido

      //         tagIndex < 0 ||
      //         tagIndex >= product.tags.length ||
      //         isNaN(tagIndex)
      //       ) {
      //         break;
      //       } else {
      //         // Pergunta a nova tag

      //         let newTag = prompt(
      //           `Digite a nova tag para substituir "${product.tags[tagIndex]}":`
      //         );

      //         if (newTag) {
      //           product.tags[tagIndex] = newTag;
      //         }
      //       }

      //       // Atualiza as tags no HTML
      //       const productElement = button.closest(".product"); // Seleciona o produto certo
      //       const tagContainer = productElement.querySelector(".tag");
      //       tagContainer.innerHTML = product.tags
      //         .map((tag) => `<span>${tag}</span>`)
      //         .join("");

      //       break;

      //     case 2: // TITLE
      //       const newTitle = prompt(
      //         "Digite o novo título: ",
      //         product.title || product.title
      //       );

      //       product.title = newTitle;

      //       // Atualizar o Html com o novo titulo
      //       const titleElement = button
      //         .closest(".product")
      //         .querySelector(".text h2");

      //       titleElement.textContent = product.title;

      //       break;

      //     case 3: // DESCRIPTION
      //       const newDesc = prompt(
      //         "Digite a nova descrição: ",
      //         product.description || product.description
      //       );

      //       product.description = newDesc;

      //       // Atualizar o Html com a nova descrição
      //       const descElement = button
      //         .closest(".product")
      //         .querySelector(".text p");

      //       descElement.textContent = product.description;

      //       break;

      //     case 4: // PRICE
      //       const newPrice = prompt(
      //         "Digite o novo preço: ",
      //         product.price || product.price
      //       );

      //       product.price = newPrice;

      //       // Atualizar o Html com o novo preco
      //       const priceElement = button
      //         .closest(".product")
      //         .querySelector(".price");

      //       priceElement.textContent = `R$ ${product.price}`;

      //       break;

      //     case 5: // IMAGE
      //       const newImage = prompt(
      //         "Digite a url da nova imagem: ",
      //         product.imageUrl || product.imageUrl
      //       );

      //       product.imageUrl = newImage;

      //       // Atualizar o Html com a nova imagem
      //       const imageElement = button
      //         .closest(".product")
      //         .querySelector("img");

      //       imageElement.src = product.imageUrl;

      //       break;

      //     case 6: // SAIR
      //       continueEditing = false;
      //       break;

      //     default:
      //       continueEditing = false;
      //       break;
      //   }
      // }
    };
  });
}
updateEditButtons();

// Update delete buttons
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
