import { snakeCase } from 'snake-case';

export default function (input: object) {
  const modified: any = {};
  Object.entries(input).map(([key, value]) => {
    Object.defineProperty(modified, snakeCase(key), {
      value,
      enumerable: true,
    });
  });

  return modified;
}
