# Functional Programming using TypeScript's Note

## Functional Programming

### Core Concept

- **Pure Function**
  - Produce the same output when assigned the same input (No Side Effect)
  - **Side-Effect**: You got different output, Althought you assigned the same input.
- **Immutability**
  - Doing something instead of Modified existing global variables (That made it's mutability).
- **Currying**
  - Function taking one argument but using another sequence of function for take a new argument instead of just create one function with multiple arguments.
- **First-Class Function**
  - Function as a value to a variable (You can assign function to a variable).
- **Higher-Order Function**
  - Function that has function as "its argument" or "its return value".
- **Function Composition**
  - Combination of multiple functions to create another function.

## Functor

- In the context of Functional Programming, Functor means that we put a value onto a box (Lift) and we can operate something in the box to make new value inside the box without doing something on the box (Map / Fmap).
