import { moveRover, rotateRover } from './helpers/rover';
import { MarsGrid, Rover, RoverInstruction } from './types';

export const executeRoverInstruction = (grid: MarsGrid, rover: Rover, instructions: RoverInstruction[]): Rover => {
  return instructions.reduce((rover, currentInstruction): Rover => {
    if (currentInstruction === 'M') return moveRover(rover, grid);

    return rotateRover(rover, currentInstruction);
  }, rover);
};
