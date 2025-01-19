import { Just, None } from './monad/maybe';

const valueOne = new Just(1);

const valueNone = new None();

const plusOne = (num: number): number => num + 1;
const double = (num: number): number => num * 2;
const minusFive = (num: number): number => num - 5;

console.log(
  valueOne
    .fmap(plusOne)
    .fmap(double)
    .fmap(minusFive)
);
