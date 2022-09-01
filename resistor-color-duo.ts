export function decodedValue(colors: string[]): number {
  const vocabulary: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']; 

  const firstDigit: number = vocabulary.findIndex(elem => elem === colors[0].toLowerCase());
  const secondDigit: number = vocabulary.findIndex(elem => elem === colors[1].toLowerCase());

  return firstDigit * 10 + secondDigit;
}