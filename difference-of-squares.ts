export class Squares {
  count: number;

  constructor(count: number) {
    if (count < 1) throw new Error('The number must be 1 or greater');
    this.count = count;
  }

  get sumOfSquares(): number {
    let result: number = 0;
    for (let i = 1; i <= this.count; i++) {
      result += i**2;
    }

    return result;
  }

  get squareOfSum(): number {
    let result: number = 0;
    for (let i = 1; i <= this.count; i++) {
      result += i;
    }
    return result**2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
