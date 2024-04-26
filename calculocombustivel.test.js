//IMPORTAÇÃO DA FUNÇÃO
const calculocombustivel = require("./calculocombustivel")

//TESTE
test('Calcular a quantidade em litros de gasolina utilizada para percorrer 150000 metros.', () => {
    expect(calculocombustivel.calcularCombustivel(150000, 16)).toBe(9375)
})