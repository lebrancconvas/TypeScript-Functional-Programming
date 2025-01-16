export interface Functor<T> {
  map<K>(fn: (value: T) => K): Functor<K>
}


