import { anything, anything1 } from './string';

describe('string', () => {
  it('Debe verificar si "anything" contiene "UN"', () => {
    expect(anything).toContain("UN");
  });

  it('Debe verificar si "anything" no contiene "P"', () => {
    expect(anything).not.toContain("P");
  });

  it('Debe verificar si "anything1" contiene la letra "n"', () => {
    expect(anything1).toContain("n");
  });
});
