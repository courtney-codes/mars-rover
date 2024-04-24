import { createRover, moveRover, rotateRover } from '../../src/helpers/rover';
import { Direction } from '../../src/types';

describe('createRover() function', () => {
  it('should create a new rover with co-ordinates', () => {
    const grid = { x: 5, y: 5 };
    const rover = createRover(grid, 1, 3, 'N');

    expect(rover).toEqual({
      position: { x: 1, y: 3 },
      direction: 'N',
    });
  });

  it('should create a rover close to the boundary if co-ordinates are out of bounds', () => {
    const grid = { x: 5, y: 5 };
    const rover = createRover(grid, 1, 8, 'N');

    expect(rover).toEqual({
      position: { x: 1, y: 5 },
      direction: 'N',
    });
  });
  
});

describe('moveRover() function', () => {
  it.each([
    [1, 1, { x: 1, y: 2 }, 'N'],
    [1, 1, { x: 1, y: 0 }, 'S'],
    [2, 1, { x: 3, y: 1 }, 'E'],
    [2, 1, { x: 1, y: 1 }, 'W'],
  ])(
    'should move from position %s to position %s when facing %s',
    (initialX, initialY, expectedPosition, direction) => {
      const grid = { x: 5, y: 5 };
      const rover = createRover(grid, initialX, initialY, direction as Direction);
      const expectedRover = moveRover(rover, grid);

      expect(expectedRover.position).toEqual(expectedPosition);
    }
  );
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
      const grid = { x: 5, y: 5 };
      const rover = createRover(grid, 1, 1, currentDirection as Direction);
      const expectedRover = rotateRover(rover, instruction);

      expect(expectedRover.direction).toEqual(newDirection);
    }
  );
});
