const lessThanZeroError = 'The Input Number cannot be less than zero';

export function sumOfSequenceInteger(n: number): number {
  if(n < 0) throw new Error(lessThanZeroError);
  if(n == 0) return n;

  return sumOfSequenceInteger(n - 1) + n;

};

export function sumOfSequenceIntegerEuler(n: number): number {
  if(n < 0) throw new Error(lessThanZeroError);

  return (n * (n+1)) / 2;

};

// console.log(sumOfSequenceIntegerEuler(100));
console.log(sumOfSequenceInteger(-1));
