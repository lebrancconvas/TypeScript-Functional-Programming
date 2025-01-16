// L => Value for Error Value (Such as Error Message).
// R => Value for Normal Value.
export class EitherMonad<L, R> {
  value: L | R;
  isRight: boolean; // Mean "Is that a normal value?".

  constructor(value: L | R, isRight: boolean) {
    this.value = value;
    this.isRight = isRight;
  }

  // Assign for Normal Value.
  static right<L, R>(value: R): EitherMonad<L, R> {
    return new EitherMonad<L, R>(value, true);
  }

  // Assign for Error Value.
  static left<L, R>(value: L): EitherMonad<L, R> {
    return new EitherMonad<L, R>(value, false);
  }


  map<T>(fn: (r: R) => T): EitherMonad<L, T> {
    return this.isRight
      ? EitherMonad.right<L, T>(fn(this.value as R))
      : EitherMonad.left<L, T>(this.value as L)
  }

  flatMap<T>(fn: (r:R) => EitherMonad<L, T>): EitherMonad<L, T> {
    return this.isRight
      ? fn(this.value as R)
      : EitherMonad.left<L, T>(this.value as L)
  }
};
