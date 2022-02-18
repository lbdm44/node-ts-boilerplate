import index from './index';

describe('Typescript usage suite', () => {
  it('should be able to execute a test', () => {
    expect(true).toBe(true);
  });
  it('should return expected string', () => {
    expect(index('incoming')).toBe('incoming-static-v2');
  });
});
