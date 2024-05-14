//IMPORTAÇÃO DA FUNÇÃO
const calculocombustivel = require('./calculocombustivel')

//PARÂMETROS PASSADOS PARA A FUNÇÃO SUPONDO QUE O VEÍCULO FAÇA 16KM/L
console.log(calculocombustivel.calcularCombustivel(150000, 16))