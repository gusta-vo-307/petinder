function adicionar() {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    exibirDados(data);
} 
  
function exibirDados(data) {
    const containerLista = document.querySelector('.container-lista');

    const card = document.createElement('div');
    card.classList.add('card');

    const roundedPhoto = document.createElement('div');
    roundedPhoto.classList.add('rounded-photo');

    const img = document.createElement('img');
    img.classList.add('container-img');
    img.src = 'localhost:8080/dogs/cadastrar';
    img.alt = 'foto-dog';

    roundedPhoto.appendChild(img);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');

    const keys = Object.keys(data);

    keys.forEach(key => {
        const title = document.createElement('p');
        title.classList.add('text-title');
        title.textContent = `${key}:`;

        const value = document.createElement('p');
        value.classList.add('text-body');
        value.textContent = data[key];

        cardDetails.appendChild(title);
        cardDetails.appendChild(value);
    });

    const button = document.createElement('button');
    button.type = 'button';

    const numeroTel = "telefone"
    const linkWhatsApp = `https://wa.me/${numeroTel}`

    card.appendChild(roundedPhoto);
    card.appendChild(cardDetails);
    containerLista.appendChild(card);
} 

const fazFetch = async () => {
    const gu = await fetch('http://localhost:8080/dogs/listar', {
        method: "GET"
    })
    
    const joao = await gu.json()

    for (const cao of joao) {
        const el = document.querySelector(".container-lista");

        console.log(cao)

        el.innerHTML += `
            <div class="card">
                <div class="rounded-photo">
                    <img class="container-img" src="${cao["image"]}" alt="foto-dog">
                </div>

                <div class="card-details">
                    <p class="text-title" id="apelido">Aupelido: ${cao["aupelido"]}</p>
                    <p class="text-body">Porte: ${cao["porte"]} </p> 
                    <p class="text-body">Idade: ${cao["idade"]} </p>
                    <p class="text-body">Sexo: ${cao["sexo"]} </p>
                    <p class="text-body">Personalidade: ${cao["personalidade"]} </p>
                    <p class="text-body">Tutor: ${cao["tutor"]}</p>
                    <p class="text-body">Castrado: ${cao["castrado"]}</p>
                    <p class="text-body">Telefone: ${cao["telefone"]}</p>
                    <a href="https://api.whatsapp.com/send/?phone=${cao["telefone"]}&text&type=phone_number&app_absent=0">Contato </a>
                    
                </div>
            </div>
        `
    }
}
//https://api.whatsapp.com/send/?phone=${dog["telefone"]}&text&type=phone_number&app_absent=0
fazFetch();

const fazFetchUnico = async () => {
    const gu = await fetch(`http://localhost:8080/dogs/listar/${1}`, {
        method: "GET"
    })
    
    const joao = await gu.json()

    console.log(joao);
}