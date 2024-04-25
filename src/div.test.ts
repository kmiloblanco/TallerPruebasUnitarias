import { div } from './div';

describe('div', () => {
  it('Debe retornar el resultado de una división correcta', () => {
    const a = 10;
    const b = 2;
    const result = div(a, b);
    expect(result).toBe(5);
  });
  
  it('Debe retornar el resultado de una división correcta', () => {
    const a = 10;
    const b = 0;
    const result = div(a, b);
    expect(result).toBe(Infinity); 
  });
});
