// const products = document.querySelector("#products")
const buttonAdd = document.getElementById("addbtn")
const products = []

buttonAdd.addEventListener("click", function addProduct() {

        // Tag
        let tag = function addTag(params) {
            opt = prompt("1 - Add uma tag \n2 - Add duas tags \n3 - Add três tags")
            switch (opt) {

                case "1":
                    const tag = [prompt('Digite a tag do seu novo produto:')]
                    break;

                case "2":
                    counter = 2
                    while (counter <= 2){
                        counter -= 1
                        const tag = [prompt('Digite a tag do seu novo produto:')]
                    }
                    break;

                case "3":
                    counter = 3
                    while (counter <= 3){
                        counter -= 1
                        const tag = [prompt('Digite a tag do seu novo produto:')]
                    }
                    break;
            
            }
        }
        
        // Product
        let product = {
            "image_url": "https://",
            "tags": tag,
            "title": prompt('Digite o título do seu novo produto:'),
            "description": prompt('Digite a descrição do seu novo produto:')
        }
        
        // Storage
        products.push(product)
        console.log(products);
    }
)