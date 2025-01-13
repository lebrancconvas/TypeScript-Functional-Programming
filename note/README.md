# Functional Programming using TypeScript's Note

## Functional Programming

### Core Concept

- **Pure Function**
  - Produce the same output when assigned the same input (No Side Effect)
  - **Side-Effect**: You got different output, Althought you assigned the same input.
- **Immutability**
  - Doing something instead of Modified existing global variables (That made it's mutability).
- **Arity**
  - Number of function arguments.
- **Currying**
  - Function taking one argument but using another sequence of function for take a new argument instead of just create one function with multiple arguments. (Arity = 1 based)
- **First-Class Function**
  - Function as a value to a variable (You can assign function to a variable).
- **Higher-Order Function**
  - Function that has function as "its argument" or "its return value".
- **Function Composition**
  - Combination of multiple functions to create another function.

## Functor

- In the context of Functional Programming, Functor means that we put a value onto a box (Lift) and we can operate something in the box to make new value inside the box without doing something on the box (Map / Fmap).

## Monad

- Functor with additional features
  - Wrapping the value in the container / box.
  - Flatten nested containers.
  - Allows you to sequence operations where each step can depend on previous results.
- Functor is like a box with a window where you can see and transform what's inside.
- Monad is like a box with a window that you can open and put things in and take things out and combine with other boxes.

### Type of Monad

- **Maybe Monad**
  - Handle with Nullable Value.
- **Either Monad**
  - Handle with Success and Failure case with Error Information.
- **IO Monad**
  - Handle with Side Effect and Make them explicit.
- **State Monad**
  - Handle with State Transformation.
- **Reader Monad**
  - Handle with Depecdency Injection.
- **List Monad**
  - Handle with Non-Deterministic Computation.
