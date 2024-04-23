import { createRover, moveRover, rotateRover } from '../../src/helpers/rover';
import { Direction } from '../../src/types';

describe('createRover() function', () => {
  it('should create a new rover with co-ordinates', () => {
    const rover = createRover(1, 3, 'N');

    expect(rover).toEqual({
      position: {x: 1, y: 3},
      direction: 'N',
    });
  });
});

describe('moveRover() function', () => {
  it.each([
    [1, 1, {x: 1, y: 2}, 'N'],
    [1, 1, {x: 1, y: 0}, 'S'],
    [2, 1, {x: 3, y: 1}, 'E'],
    [2, 1, {x: 1, y: 1}, 'W'],
  ])('should move from position %s to position %s when facing %s', (initialX, initialY, expectedPosition, direction) => {
    let rover = createRover(initialX, initialY, direction as Direction);
    rover = moveRover(rover, {x: 5, y: 5});

    expect(rover.position).toEqual(expectedPosition);
  });
});

describe('rotateRover() function', () => {
  it.each([
    ['N', 'L', 'W'],
    ['N', 'R', 'E'],
    ['E', 'R', 'S'],
    ['E', 'L', 'N'],
    ['S', 'L', 'E'],
    ['S', 'R', 'W'],
    ['W', 'R', 'N'],
    ['W', 'L', 'S'],
  ])(
    'should, when facing %s, if given an %s instruction, turn to face %s',
    (currentDirection, instruction, newDirection) => {
      let rover = createRover(1, 1, currentDirection as Direction);
      rover = rotateRover(rover, instruction);

      expect(rover.direction).toEqual(newDirection);
    }
  );
});
