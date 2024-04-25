import { sum } from './sum';

describe('sum', () => {
  it('Debe retornar una suma mayor a 10', () => {
    const a = 6;
    const b = 6;
    const result = sum(a, b);
    expect(result).toBeGreaterThan(10);
  });

  it('Debe retornar una suma mayor o igual a 20', () => {
    const a = 10;
    const b = 10;
    const result = sum(a, b);
    expect(result).toBeGreaterThanOrEqual(20);
  });

  it('Debe retornar una suma menor o igual a 8', () => {
    const a = 3;
    const b = 5;
    const result = sum(a, b);
    expect(result).toBeLessThanOrEqual(8);
  });

  it('Debe retornar una suma menor a 12', () => {
    const a = 5;
    const b = 5;
    const result = sum(a, b);
    expect(result).toBeLessThan(12);
  });

  it('Debe retornar una suma igual a 9', () => {
    const a = 4;
    const b = 5;
    const result = sum(a, b);
    expect(result).toBe(9);
  });
});
