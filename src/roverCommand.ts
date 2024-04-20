import { moveRover, rotateRover } from './helpers/rover';
import { Rover, RoverInstruction } from './types';

export const executeRoverInstruction = (
  startingGridX: number,
  startingGridY: number,
  rover: Rover,
  instructions: RoverInstruction[]
): Rover => {

  return instructions.reduce((rover, currentInstruction) => {
    // If we know we want to reduce the rover
    if (currentInstruction === 'M') return moveRover(rover);

    return rotateRover(rover, currentInstruction);
  }, rover);
};
