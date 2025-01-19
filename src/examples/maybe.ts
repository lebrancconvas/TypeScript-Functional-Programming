type Option<T> = T | null;

type Some<T> = { value: T };
type None = null;
type Maybe<T> = Some<T> | None;
