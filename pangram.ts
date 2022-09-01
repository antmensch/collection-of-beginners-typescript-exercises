export function isPangram(input: string): boolean {
  const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];
  const lowerCaseInput = input.toLowerCase();

  let result = true;
  ALPHABET.forEach(letter => {
    if (!lowerCaseInput.includes(letter)) result = false;
  });

  return result;
}
