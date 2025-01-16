export function reduceSum(nums: number[], acc: number = 0) {
  if(nums.length === 0) return acc;
  const [head, ...tails] = nums;

  return reduceSum(tails, acc + head);

};

console.log(reduceSum([1,2,3,4,5]));

export function reduceFunc<T>(list: T[], reducer: (identity: T, element: T) => T, identity: T): T {
  if(list.length === 0) return identity;

  const [head, ...tails] = list;

  return reduceFunc(tails, reducer, reducer(identity, head));
};

console.log(reduceFunc([1,2,3,4,5], (a, b) => a + b, 0));
