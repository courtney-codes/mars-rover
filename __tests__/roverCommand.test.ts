import { createRover } from '../src/helpers/rover';
import { executeRoverInstruction } from '../src/roverCommand';
import { Direction, RoverInstruction } from '../src/types';

describe('executeRoverInstruction', () => {
  it.each([
    [{ x: 5, y: 5 }, 1, 2, 'N', ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'], { x: 1, y: 3 }, 'N'],
    [{ x: 5, y: 5 }, 3, 3, 'E', ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'], { x: 5, y: 1 }, 'E'],
  ])(
    'should execute a correct string of rover instructions and return the result',
    (
      initialGrid,
      initialX,
      initialY,
      initialDirection,
      instructions,
      expectedRoverPosition,
      expectedRoverDirection
    ) => {
      const rover = createRover(initialX, initialY, initialDirection as Direction);

      const finalRover = executeRoverInstruction(initialGrid, rover, instructions as RoverInstruction[]);
      expect(finalRover.position).toEqual(expectedRoverPosition);
      expect(finalRover.direction).toBe(expectedRoverDirection);
    }
  );
});
