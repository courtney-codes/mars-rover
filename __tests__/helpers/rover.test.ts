import { createRover, moveRover, rotateRover } from '../../src/helpers/rover';
import { Direction } from '../../src/types';

describe('createRover() function', () => {
  it('should create a new rover with co-ordinates', () => {
    const rover = createRover(1, 3, 'N');

    expect(rover).toEqual({
      position: [1, 3],
      direction: 'N',
    });
  });
});

describe('moveRover() function', () => {
  it.each([
    [[1, 1], [1, 2], 'N'],
    [[1, 1], [1, 0], 'S'],
    [[2, 1], [3, 1], 'E'],
    [[2, 1], [1, 1], 'W'],
  ])('should move from position %s to position %s when facing %s', (currentPosition, expectedPosition, direction) => {
    let rover = createRover(currentPosition[0], currentPosition[1], direction as Direction);
    rover = moveRover(rover);

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
