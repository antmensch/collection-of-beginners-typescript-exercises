export function toRna(dna: string): string {
  const DNA_MAP: {[key: string]: string} = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A'
  }

  let result: string = '';
  [...dna].forEach((elem) => {
    if (!Object.keys(DNA_MAP).includes(elem))
      throw new Error('Invalid input DNA.');
    result += DNA_MAP[elem];
  } );

  return result;
}
