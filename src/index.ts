import './main.scss';

console.log("I'm Alive!");

export const sum
    = (...a: number[]) =>
      a.reduce((acc, val) => acc + val, 0);