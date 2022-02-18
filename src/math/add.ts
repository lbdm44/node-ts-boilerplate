export default function add(...args: number[]): number {
  return args.reduce((sum, a) => (sum + a));
}