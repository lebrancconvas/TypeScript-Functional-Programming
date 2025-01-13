class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  map(func: (value: T) => T) {
    return new Box(func(this.value));
  }
};


class Nothing<T> {
  value: null;

  constructor() {
    this.value = null;
  }

  map(func: (value: null) => T) {
    return new Box(func(null));
  }
}

class Maybe<T> {
  value: T | null;

  constructor(value: T | null) {
    this.value = value;
  }

  map(func: (value: T | null) => T | null) {
    if(this.value !== null) {
      return new Maybe(func(this.value))
    } else {
      return new Maybe(func(null));
    }
  }

};
