const { soma, subtracao, multiplicacao, divisao } = require('../src/math');

describe('Operações matemáticas', () => {
  test('soma 2 + 3 = 5', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('subtracao 7 - 4 = 3', () => {
    expect(subtracao(7, 4)).toBe(3);
  });

  test('multiplicacao 6 * 5 = 30', () => {
    expect(multiplicacao(6, 5)).toBe(30);
  });

  test('divisao 10 / 2 = 5', () => {
    expect(divisao(10, 2)).toBe(5);
  });

  test('divisão por zero lança erro', () => {
    expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida');
  });
});
