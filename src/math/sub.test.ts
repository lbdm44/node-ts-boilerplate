import sub from './sub';

describe('sub', () => {
  it('should subtract', () => {
    expect(sub(1, 2)).toBe(-1);
    expect(sub(1, 2, 3)).toBe(-4);
  });
});