export function age(planet: string, ageInSeconds: number): number {
  const SECONDS_IN_EARTH_YEAR: number = 31557600;
  const MAP_PLANET_YEARS: {[key: string]:number} = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132,
  }

  return Math.round(( ageInSeconds / (MAP_PLANET_YEARS[planet] * SECONDS_IN_EARTH_YEAR) ) * 100) / 100;
}
