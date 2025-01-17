export const compose = <T>(f: (arg: T) => T, g: (arg: T) => T) => (x: T) => f(g(x));

export const plusOne = (num: number) => num + 1;

export const double = (num: number) => num * 2;

console.log(compose(double, plusOne)(1));
