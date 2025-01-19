export type Maybe<T> = Just<T> | None;

export class Just<T> {

  constructor(public value: T) {}

  fmap<U>(fn: (arg: T) => U): Maybe<U> {
    return new Just<U>(fn(this.value));
  }
};

export class None {

  fmap<U>(fn: (arg: any) => U): Maybe<U> {
    return new None();
  }
};
