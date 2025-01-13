export class IOMonad<T> {
  effect: () => T;

  constructor(effect: () => T) {
    this.effect = effect;
  }

  static of<T>(value: T): IOMonad<T> {
    return new IOMonad(() => value);
  }

  map<K>(fn: (arg: T) => K): IOMonad<K> {
    return new IOMonad(() => fn(this.effect()));
  }

  flatMap<K>(fn: (arg: T) => IOMonad<K>): IOMonad<K> {
    return new IOMonad(() => fn(this.effect()).run());
  }

  run(): T {
    return this.effect();
  }
};
