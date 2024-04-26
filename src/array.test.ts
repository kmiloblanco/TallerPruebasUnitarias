import { arrayContainsValue, arrayNotContainsValue } from './array';

describe('arrayContainsValue', () => {
  it('Debe retornar true si el valor se encuentra en el arreglo', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value1';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  it('Debe retornar true si el valor se encuentra en el arreglo', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value3';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  it('Debe retornar false si el valor no se encuentra en el arreglo', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'UNAC';
    expect(arrayContainsValue(arr, value)).toBe(false);
  });
});

describe('arrayNotContainsValue', () => {
  it('Debe retornar false si el valor está contenido en el arreglo', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value1';
    expect(arrayNotContainsValue(arr, value)).toBe(false);
  });

  it('Debe retornar false si el valor está contenido en el arreglo', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value3';
    expect(arrayNotContainsValue(arr, value)).toBe(false);
  });

  it('Debe retornar true si el valor no está contenido en el arreglo', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'UNAC';
    expect(arrayNotContainsValue(arr, value)).toBe(true);
  });
});
