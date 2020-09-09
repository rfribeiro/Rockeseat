class User {
    constructor(nome, senha){
        this.nome;
        this.senha;
        this.admin = false;
        console.log("construtor pai");
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends User {
    constructor(nome, senha){
        super(nome, senha)
        super.admin = true;
        console.log("construtor adim");
    }
}

// Ex. 1 Class overload
var user = new User("rafael", "sdfsdfd");
var admin = new Admin("rafael", "sdfsdfd");

console.log(user.isAdmin());
console.log(admin.isAdmin());

// Ex. 2  métodos de array (map, reduce, filter e find):
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

// Ex. 2.1 map
const idades = usuarios.map(item => item.idade);
// Ex. 2.2 filter
const maiores = usuarios.filter(item => item.idade > 18 && item.empresa === "Rocketseat");
// Ex. 2.3 find
const empr = usuarios.find(item => item.empresa === "Google");
// Ex. 2.4 unindo operações
const res = usuarios.map( users => ({...users, idade: users.idade * 2})).filter(users => users.idade <= 50);

// Ex 3 Arrow functions
// 3.1 
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
 return item + 10;
});

arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);

const mostraIdade2 = usuario => usuario.idade;

// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }

//const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

//mostraUsuario(nome, idade);
//mostraUsuario(nome);

// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
//    } 
const promise = () => new Promise(resolve, reject => resolve());

// 4.1 desestruturação simples
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
   };

const {nome, endereco: {cidade, estado}} = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2 desestruturação em parametros
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
//    }
//    mostraInfo({ nome: 'Diego', idade: 23 })

const mostraInfo = ({nome, idade}) => { return `${nome} tem ${idade} anos.`;};

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// 5.1 rest
const arr2 = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr2;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.2 spread
const usuario2 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
   };

const usuario3 = {...usuario2, nome : "Gabriel"};
const usuario4 = {...usuario2, endereco : { ...usuario2.endereco, cidade: "Lontras"} };

// Ex. 6  Template Literals
const usuar = 'Diego';
const idade = 23;
console.log('O usuário ' + usuar + ' possui ' + idade + ' anos');
console.log(`O usuário ${usuar} possui ${idade} anos`);

// Ex. 7 Object Short Syntax
const nome2 = 'Diego';
const idade2 = 23;
const usuario5 = {
 nome2,
 idade2,
 cidade: 'Rio do Sul',
};

1edDhCO5WtD31PC4lN-ue3v-DFhbsRufa
77a7d589-8d03-423a-be83-fba66884191e