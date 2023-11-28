async function adicionar(event) {
    event.preventDefault();
    //mandar obj dog 
        const dog = {
            aupelido: document.getElementById("aupelido").value,
            idade: document.getElementById("Idade").value,
            porte: document.querySelector("[name= 'porte']:checked").value,
            personalidade: document.querySelector("[name='personalidade']:checked").value,
            tutor: document.getElementById("nomett").value,
            castrado: document.querySelector("[name= 'Castrado']:checked").value,
            problemas: document.querySelector("[name= 'saude']:checked").value,
            vacinado: document.querySelector("[name= 'Vacinas']:checked").value,
            tutorContato: document.getElementById("telefone").value,
            sexo: document.querySelector("[name='sexo']").value
        };

        await fetch('http://localhost:8080/dogs/cadastrar', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
        })
    }