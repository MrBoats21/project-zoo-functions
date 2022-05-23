const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se ao não serem recebidos parâmetros, a função retorna todos os dias e horários', () => {
    const current = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(current).toEqual(expected);
  });

  it('Verifica se a função retorna se o zoológico está fechado ou não baseado no dia e na hora fornecida como parâmetro', () => {
    const current = getOpeningHours('Tuesday', '8:30-AM');
    const expected = 'The zoo is open';
    expect(current).toBe(expected);
  });

  it('Verifica se a função retorna que o zooĺogico está fechado a qualquer hora de um dia de domingo', () => {
    const current = getOpeningHours('Monday', '8:30-AM');
    const expected = 'The zoo is closed';
    expect(current).toBe(expected);
  });

  it('Verifica se a data inserida como argumento é um número', () => {
    expect(() => {
      getOpeningHours('Tuesday', 'Três da tarde');
    }).toThrowError();
  });

  it('Verifica se no final do segundo argumento existem ou AM ou PM', () => {
    expect(() => {
      getOpeningHours('Tuesday', '9:30-AB');
    }).toThrowError();
  });

  it('Verifica se a hora informada está entre 0 e 12', () => {
    expect(() => {
      getOpeningHours('Tuesday', '14:30-AM');
    }).toThrowError();
  });

  it('Verifica se os minutos informados são válidos', () => {
    expect(() => {
      getOpeningHours('Wednesday', '8:67-AM');
    }).toThrowError();
  });

  it('Verifica se o dia informado é válido', () => {
    expect(() => {
      getOpeningHours('Quarta-feira', '2:30-PM');
    }).toThrowError();
  });
});
