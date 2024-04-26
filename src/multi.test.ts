import { n, number, notTrue, notFalse } from './multi';

describe('multi', () => {
  it('Debe verificar si "n" es null', () => {
    expect(n).toBeNull();
  });

  it('Debe verificar si "n" está definido (no es undefined)', () => {
    expect(n).toBeDefined();
  });

  it('Debe verificar si "number" es igual a 0', () => {
    expect(number).toBe(0);
  });

  it('Debe verificar si "notTrue" es false', () => {
    expect(notTrue).toBe(false);
  });

  it('Debe verificar si "notFalse" es true', () => {
    expect(notFalse).toBe(true);
  });
});
