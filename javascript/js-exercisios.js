function getGitHubUser() {
    var user = document.querySelector("input[name=user]").value;
    console.log(`getGitHubUser https://api.github.com/users/${user}/repos`)
    var lista = document.querySelector("#lista");

    lista.innerHTML = ''

    var repoElem = document.createElement("li");
    var repoText = document.createTextNode("Carregando ...");

    repoElem.appendChild(repoText)
    lista.appendChild(repoElem)

    axios.get(`https://api.github.com/users/${user}/repos`)
        .then((response) => {
            
            lista.innerHTML = ''
            response.data.forEach((item) => {
                
                var repoElem = document.createElement("li");
                var repoText = document.createTextNode(item['name']);

                repoElem.appendChild(repoText)
                lista.appendChild(repoElem)
            })
        })
        .catch(() => {
            console.log("erro");
            lista.innerHTML = ''
            var repoElem = document.createElement("li");
            var repoText = document.createTextNode("Usuario não encontrado!");
        
            repoElem.appendChild(repoText)
            lista.appendChild(repoElem)
        })
}

function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve("Maior que 18");
        }
        else {
            reject("Menor que 18");
        }
    })
}

checaIdade(25)
    .then(pass_texto => {
        console.log(pass_texto);
    })
    .catch(function (erro_texto) {
        console.log(erro_texto);
    })