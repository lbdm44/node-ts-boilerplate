import { add } from './math';

export default function (incomingText: string): string {
  return `${incomingText}-static-v2 ${add(1, 2)}`;
}
