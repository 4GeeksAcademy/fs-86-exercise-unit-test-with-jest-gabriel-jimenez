// Importar la función sum del archivo app.js
const {sum,  fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 156.5 yenes", () => {
    const yenes = fromDollarToYen(100);
    const expected = (100*156.5)/1.07;
    expect(fromDollarToYen(100)).toBe(expected); 
});

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected); 
});

test("One euro should be 0.87 pounds", () => {
    const pounds = fromYenToPound (600);
    const expected = (600/156.5)*0.87;
    expect(fromYenToPound (600)).toBe(expected); 
});
