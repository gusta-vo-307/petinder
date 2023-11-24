function adicionar(event) {
    event.preventDefault();
    
        const dog = {
            apelido: document.getElementById("aupelido").value,
            porte: document.querySelector("[name= 'porte']:checked").value,
            personalidade: document.querySelector("[name='personalidade']:checked").value,
            tutor: document.getElementById("nomett").value,
            castrado: document.querySelector("[name= 'Castrado']:checked").value,
            saude: document.querySelector("[name= 'saude']:checked").value,
            vacina: document.querySelector("[name= 'Vacinas']:checked").value,
            telefone: document.getElementById("telefone").value,
        };
        console.log(dog);
    }