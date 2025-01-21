export {};

// const echo = (age: number): number => {
//   return age;
// }

// const echo = (age: string): string => {
//   return age;
// }

const echo = <T>(age: T):  T=> {
  return age;
}

console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));


class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());