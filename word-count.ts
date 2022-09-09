export function count(phrase: string): Map<string, number>  {
  
  const normalizedPhrase: string = phrase.toLowerCase().trim();
  const wordsArr: string[] = normalizedPhrase.split(/\s+/);
  const countMap: Map<string, number> = new Map();
  
  wordsArr.forEach(elem => {
    if (!countMap.has(elem)) 
      countMap.set(elem, 1);

    else 
      countMap.set(elem, countMap.get(elem)! + 1);

  });

  return countMap;
}