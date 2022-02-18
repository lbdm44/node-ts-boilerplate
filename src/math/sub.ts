export default function sub(...args: number[]): number {
  return args.reduce((diff, a) => (diff - a));
}