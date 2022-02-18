import add from './add';

describe('add', () => {
  it('should add', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(1, 2, 3)).toBe(6);
  });
});
