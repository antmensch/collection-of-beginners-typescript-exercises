export function decodedResistorValue(colors: string[]): string {
  const colorsMap: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  const firstDigit: number = colorsMap.findIndex(elem => elem === colors[0].toLowerCase());
  const secondDigit: number = colorsMap.findIndex(elem => elem === colors[1].toLowerCase());
  const thirdDigit: number = colorsMap.findIndex(elem => elem === colors[2].toLowerCase());
  const decodedValue: number = (firstDigit * 10 + secondDigit) * (10 ** thirdDigit);
  
  function findZerosNumber(n: number) :number {
    const stringifiedN: string = n.toString();
    let zerosCount: number = 0;
    for (let i = stringifiedN.length - 1; i >=0; i--) {
      if (stringifiedN[i] != '0') break;
      zerosCount++;
    }
    return zerosCount;
  }

  function getMeasureUnit(zeroes: number): string {
    const zeroesGroups: number = Math.floor(zeroes / 3);
    let result = '';
    switch (zeroesGroups) {
      case 1:
        result = 'kilo';
        break;
      case 2:
        result = 'mega';
        break;
      case 3:
        result = 'giga';
        break;
    }

    return result;
  }

  const numberOfZeros: number = findZerosNumber(decodedValue);
  return `${decodedValue / 1000 ** Math.floor(numberOfZeros / 3)} ${getMeasureUnit(numberOfZeros)}ohms`;
}


