//FUNÇÃO PARA SIMULAR UM GASTO DE COMBUSTÍVEL POR KM RODADO 
function calcularCombustivel(distancia, tipoCombustivel){
    
    let resultado;
    distancia = parseInt(distancia)

    resultado = distancia / tipoCombustivel

    return resultado;
}

//EXPORTAÇÃO DA FUNÇÃO
module.exports = {calcularCombustivel}