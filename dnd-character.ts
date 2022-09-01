export class DnDCharacter {
  readonly strength: number = DnDCharacter.generateAbilityScore();
  readonly dexterity: number = DnDCharacter.generateAbilityScore();
  readonly constitution: number = DnDCharacter.generateAbilityScore();
  readonly intelligence: number = DnDCharacter.generateAbilityScore();
  readonly wisdom: number = DnDCharacter.generateAbilityScore();
  readonly charisma: number = DnDCharacter.generateAbilityScore();
  readonly hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
      let result = 0;
      let lowest = 6;
      for (let i = 0; i < 4; i++) {
        let thisThrow = this.throwDice();
        result += thisThrow;
        if (thisThrow < lowest) lowest = thisThrow;
      }

      return result - lowest;
  }

  private static throwDice(): number {
    return Math.ceil((Math.random() * 6));
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
