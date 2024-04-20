import { createRover } from '../src/helpers/rover';
import { executeRoverInstruction } from '../src/roverCommand';
import { Direction, RoverInstruction } from '../src/types';

describe('executeRoverInstruction', () => {
  it.each([
    [
      [5, 5],
      [1, 2, 'N'],
      ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
      [1, 3, 'N'],
    ],
    [
      [5, 5],
      [3, 3, 'E'],
      ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
      [5, 1, 'E'],
    ],
  ])(
    'should execute a correct string of rover instructions and return the result',
    (initialGrid, initialRover, instructions, expectedRover) => {
      const rover = createRover(initialRover[0] as number, initialRover[1] as number, initialRover[2] as Direction);

      const finalRover = executeRoverInstruction(5, 5, rover, instructions as RoverInstruction[]);
      expect(finalRover.position).toEqual([expectedRover[0], expectedRover[1]]);
      expect(finalRover.direction).toBe(expectedRover[2]);
    }
  );
});
