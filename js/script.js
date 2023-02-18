let products = {
    data: [
      {
        productName: "Mortal Kombat 11",
        category: "luta",
        price: "249,99",
        image: "img/mortal-kombat-11.png",
      },
      {
        productName: "Hogwarts Legacy",
        category: "rpg",
        price: "459,99",
        image: "img/hogwarts-legacy.png",
      },
      {
        productName: "Fifa 23",
        category: "esporte",
        price: "399,99",
        image: "img/fifa-23.png",
      },
      {
        productName: "Dead Space",
        category: "terror",
        price: "329,99",
        image: "img/dead-space.png",
      },
      {
        productName: "Call Of Duty: Modern Warfare II",
        category: "acao",
        price: "329,99",
        image: "img/cod-mwii.png",
      },
      {
        productName: "NBA 2K23",
        category: "esporte",
        price: "299,99",
        image: "img/nba2k23.png",
      },
      {
        productName: "Need For Speed: Heat",
        category: "corrida",
        price: "129",
        image: "img/need-for-speed-head.png",
      },
      {
        productName: "Dragon Ball Z: Kakarot",
        category: "luta",
        price: "499,99",
        image: "img/dragon-ball-z-kakarot.png",
      },
      {
        productName: "Resident Evil 7",
        category: "terror",
        price: "139,90",
        image: "img/resident-evil-7.png",
      },
      {
        productName: "The Witcher 3: Wild Hunt",
        category: "rpg",
        price: "139,99",
        image: "img/the-witcher-3.png",
      },
      {
        productName: "Genshin Impact",
        category: "aventura",
        price: "Gratuito",
        image: "img/genshin-impact.png",
      },
      {
        productName: "Bob Espoja: The Cosmic Shake",
        category: "aventura",
        price: "299,99",
        image: "img/bob-esponja-cosmic-shake.png",
      },
      {
        productName: "Forspoken",
        category: "acao",
        price: "499,99",
        image: "img/forspoken.png",
      },
      {
        productName: "Horizon Chace Turbo",
        category: "corrida",
        price: "119,90",
        image: "img/horizon-chace.png",
      },
      {
        productName: "Monster Hunter: Rise",
        category: "rpg",
        price: "199,99",
        image: "img/monster-hunter-rise.png",
      },
      {
        productName: "Street Fighter 5: Deluxe Edition",
        category: "luta",
        price: "299,99",
        image: "img/street-fighter-5.png",
      },
      {
        productName: "The Evil Within",
        category: "terror",
        price: "199,99",
        image: "img/the-evil-within.png",
      },
    ],
  };
  
  for (let i of products.data) {
    //Cria o card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    //DIV Image
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "R$ " + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parâmetro passado do botão (parâmetro igual à categoria)
  function filterProduct(value) {
    //Código de classe do botão
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //verifique se o valor é igual ao innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //Seleciona todos os cards
    let elements = document.querySelectorAll(".card");
    //percorre todos os cartões
    elements.forEach((element) => {
      //exibir todos os cartões ao clicar no botão 'todos'
      if (value == "todos") {
        element.classList.remove("hide");
      } else {
        //Verifica se o elemento contém classe de categoria
        if (element.classList.contains(value)) {
          //elemento de exibição com base na categoria
          element.classList.remove("hide");
        } else {
          //oculta outros elementos
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Evento de click no botão de pesquisa
  document.getElementById("search").addEventListener("click", () => {
    //inicializações
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //percorrer todos os elementos
    elements.forEach((element, index) => {
      //verifica se o texto inclui o valor de pesquisa
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //exibir cartão correspondente
        cards[index].classList.remove("hide");
      } else {
        //oculta outros elementos
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Exibe todos os produtos inicialmente
  window.onload = () => {
    filterProduct("todos");
  };