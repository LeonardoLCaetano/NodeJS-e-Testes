//FUNÇÕES DE REQUISIÇÕES.
async function postData(url = '', data = {}) {

  const response = await fetch(url, {

    method: 'POST', // *GET, POST, PUT, DELETE, etc.

    headers: {

      'Content-Type': 'application/json'

    },


    body: JSON.stringify(data)

  });

  return response.json();

}

async function putData(url = '', data = {}) {

  const response = await fetch(url, {

    method: 'PUT', // *GET, POST, PUT, DELETE, etc

    headers: {

      'Content-Type': 'application/json'

    },

    body: JSON.stringify(data)

  });

  return response.json();

}

async function deleteData(url = '', data = {}) {

  const response = await fetch(url, {

    method: 'DELETE', // *GET, POST, PUT, DELETE, etc

    headers: {

      'Content-Type': 'application/json'

    },

    body: JSON.stringify(data)

  });

  return response.json();
 
}

//A FUNÇÃO GET IRÁ EXIBIR NO CONSOLE AS PROPRIEDADES DOS OBJETOS.
function Get() {

  return fetch('https://apigenerator.dronahq.com/api/KNRZQIRL/testes_api')

    .then((response) => response.json())

    .then((data) => {

      console.log('Lista de objetos: ')
      data.forEach((carro) => {
        console.log('Marca: ' + carro.Marca);
        console.log('Modelo: ' + carro.Modelo);
        console.log('Categoria: ' + carro.Categoria);
        console.log('Ano: ' + carro.Ano);
        console.log('Km: ' + carro.km);
        console.log('Valor: ' + carro.valor);
        console.log('------------------------');

      });
    });

}

//ALGUNS OBJETOS FORAM PASSADOS PARA O BANCO DE DADOS ATRAVÉS DA FERRAMENTA DE TESTES E DESENVOLVIMENTO DE API'S INSOMNIA.
// E OUTROS ADICIONADOS ATRAVÉS DO CÓDIGO PARA PRATICAR AMBAS AS FORMAS.

const objeto1 = {
    "Marca": "Ford",
    "Modelo": "Mustang",
    "Categoria": "Esportivo",
    "Ano": 2019,
    "km": 16000,
    "valor": 180000
  }

const objeto2 = {
  "Marca": "Toyota",
  "Modelo": "Corolla",
  "Categoria": "Sedan",
  "Ano": 2019,
  "km": 19000,
  "valor": 125000
  }

postData('https://apigenerator.dronahq.com/api/KNRZQIRL/testes_api', objeto1)

  .then((data) => {

    console.log(data);
    console.log('OBJETO ADICIONADO COM SUCESSO!')  

});

postData('https://apigenerator.dronahq.com/api/KNRZQIRL/testes_api', objeto2)

  .then((data) => {

    console.log(data);  
    console.log('OBJETO ADICIONADO COM SUCESSO!')
}); 

Get();











