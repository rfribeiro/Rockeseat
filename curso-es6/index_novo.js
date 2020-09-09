
const mpromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve("OK")}, 2000);
})

//mpromise().then(response => {
//    console.log(response);
//})

async function executaPromise() {
    const response = await mpromise();
    console.log(response);
}

//executaPromise();

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// Ex 3.1
async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');    
}

umPorSegundo();

// Ex 3.2
import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch (error){
        console.log('Usuario nao existe');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');