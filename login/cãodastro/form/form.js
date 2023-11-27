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

    card.appendChild(roundedPhoto);
    card.appendChild(cardDetails);
    containerLista.appendChild(card);
}

