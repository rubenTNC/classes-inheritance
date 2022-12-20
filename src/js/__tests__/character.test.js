import Character from '../Character';

describe('class Character', () => {
  test('test create class', () => {
    const character = new Character('hero', 'Bowerman', 40, 20);
    const expected = {
      name: 'hero',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 20,
    };
    expect(character).toEqual(expected);
  });
  test('test error name', () => {
    expect(() => {
      const character = new Character('Крокодил Гена', 'Daemon', 40, 20);
      return character;
    }).toThrow(new Error('Name length must be in [2;10] interval!'));
  });
  test('test error type', () => {
    expect(() => {
      const character = new Character('Гена', 'Pacman', 40, 20);
      return character;
    }).toThrow(new Error('Not valid character type!'));
  });
});
