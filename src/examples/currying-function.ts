// Basic Arithmatic Functions implemented using Currying.

const curryAdd = (num1: number) => (num2: number) => num1 + num2;

const currySubtract = (num1: number) => (num2: number) => num1 - num2;

const curryMultiply = (num1: number) => (num2: number) => num1 * num2;

// Character Dialog Functions

const dialog = (character: string) => (message: string) => `${character.toUpperCase()}: ${message.trim()}`;


const estelleSaid = dialog('Estelle');

console.log(estelleSaid('Hi Joshua!'));
