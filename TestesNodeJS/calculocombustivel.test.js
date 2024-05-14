//IMPORTAÇÃO DA FUNÇÃO
const calculocombustivel = require("./calculocombustivel")

//TESTES
test('Calcular a quantidade em litros de gasolina utilizada para percorrer 150000 metros.', () => {
    expect(calculocombustivel.calcularCombustivel(150000, 16)).toBe(9375)
})

test('Garantir que o valor não seja nulo.', () => {
    expect(calculocombustivel.calcularCombustivel(150000, 16)).not.toBeNull()
})

test('Garantir que seja um número positivo.', () => {
    expect(calculocombustivel.calcularCombustivel(150000, 16)).toBeGreaterThan(0)
})