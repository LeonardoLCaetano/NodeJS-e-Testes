const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credentials.json');
const arquivo = require('./arquivo.json');
const { JWT } = require('google-auth-library');

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets'
]

const jwt = new JWT({
    email: credenciais.client_email,
    key: credenciais.private_key,
    scopes: SCOPES,
});

// Função assíncrona para obter e carregar a planilha
async function GetDoc() {
    // Cria uma nova instância do GoogleSpreadsheet com o ID e JWT
    let doc = new GoogleSpreadsheet(arquivo.id, jwt);
    // Carrega as informações da planilha
    await doc.loadInfo();
    // Retorna a instância do documento
    return doc;
}

// Função assíncrona para ler os dados da primeira aba da planilha
async function ReadWorkSheet() {
    // Obtém a primeira aba da planilha
    let sheet = (await GetDoc()).sheetsByIndex[0];
    // Obtém todas as linhas da aba
    let rows = await sheet.getRows();
    // Mapeia as linhas para objetos
    let users = rows.map(row => {
        return row.toObject();
    });

    // Retorna os objetos dos usuários
    return users;
}

// Função assíncrona para adicionar um usuário via API
async function AddUser(data = {}) {
    // Faz uma requisição POST para a API fornecida com os dados do usuário
    const response = await fetch('https://apigenerator.dronahq.com/api/GMPBvtLv/planilhaGoogleSheets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    // Retorna a resposta da API como JSON
    return response.json();
}

// Função assíncrona para rastrear e copiar dados da planilha para a API
async function TrackData() {
    // Lê os dados da planilha
    let data = await ReadWorkSheet();
    // Mapeia cada usuário e adiciona via API
    data.map(async (user) => {
        let response = await AddUser(user);
        // Imprime a resposta da API no console
        console.log(response);
        return response;
    });

    // Imprime mensagem de sucesso no console
    return console.log('Dados copiados com sucesso!.');
}

// Chama a função TrackData para iniciar o processo
TrackData();







