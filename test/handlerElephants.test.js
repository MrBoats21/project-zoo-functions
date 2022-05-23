const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se ao se executar a função sem parâmetro ela retorna undefinded', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });

  it('Verifica se ao adicionar count como argumento retorna o total de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('Verifica se ao adicionar names como argumento retorna um array com o nome de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao adicionar location como argumento retorna o Local onde se encontram os elefantes', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  });

  it('Verifica se ao adicionar availability como argumento retorna os dias de disponibilidade dos elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao passado um parâmetro que não existe ele retorna nulo', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBe(expected);
  });

  it('Verifica se ao adicionar average como argumento retorna a média da idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBe(expected);
  });

  it('Verifica se ao passado um parâmetro que não existe ele retorna nulo', () => {
    const actual = handlerElephants('parametroInexistente');
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('Verifica se ao passado um parâmetro que não é uma string ele exibe uma mensagem de erro', () => {
    expect(handlerElephants(324)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
