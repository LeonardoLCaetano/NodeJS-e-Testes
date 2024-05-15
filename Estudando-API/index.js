// Função assíncrona para enviar dados via método POST
async function postData(url = '', data = {}) {
  // Faz uma requisição POST para a URL fornecida com os dados fornecidos
  const response = await fetch(url, {
    method: 'POST', // Define o método HTTP como POST
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
  });

  return response.json();
}

// Função assíncrona para enviar dados via método PUT
async function putData(url = '', data = {}) {
  // Faz uma requisição PUT para a URL fornecida com os dados fornecidos
  const response = await fetch(url, {
    method: 'PUT', // Define o método HTTP como PUT
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
  });

  return response.json();
}

// Função assíncrona para enviar dados via método DELETE
async function deleteData(url = '', data = {}) {
  // Faz uma requisição DELETE para a URL fornecida com os dados fornecidos
  const response = await fetch(url, {
    method: 'DELETE', // Define o método HTTP como DELETE
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
  });

  return response.json();
}

// Função para obter dados da API
function Get() {
  // Faz uma requisição GET para a URL fornecida
  return fetch('https://apigenerator.dronahq.com/api/KNRZQIRL/testes_api')
    .then((response) => response.json()) 
    .then((data) => {
      console.log('Lista de objetos: ')
      data.forEach((carro) => {

        // Imprime detalhes de cada carro no console
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

// Objetos de exemplo para serem enviados para a API
const objeto1 = {
  "Marca": "Ford",
  "Modelo": "Mustang",
  "Categoria": "Esportivo",
  "Ano": 2019,
  "km": 16000,
  "valor": 180000
};

const objeto2 = {
  "Marca": "Toyota",
  "Modelo": "Corolla",
  "Categoria": "Sedan",
  "Ano": 2019,
  "km": 19000,
  "valor": 125000
};

// Envia objeto1 para a API usando postData
postData('https://apigenerator.dronahq.com/api/KNRZQIRL/testes_api', objeto1)
  .then((data) => {
    console.log(data); // Imprime a resposta da API
    console.log('OBJETO ADICIONADO COM SUCESSO!');
  });

// Envia objeto2 para a API usando postData
postData('https://apigenerator.dronahq.com/api/KNRZQIRL/testes_api', objeto2)
  .then((data) => {
    console.log(data); // Imprime a resposta da API
    console.log('OBJETO ADICIONADO COM SUCESSO!');
  });

// Chama a função Get para obter e imprimir os dados da API
Get();












