import { Direction, Rover, RoverInstruction } from '../types';

export const createRover = (x: number, y: number, direction: Direction): Rover => ({ direction, position: [x, y] });

/**
 * Moves a rover forward one place, taking into account its heading (direction).
 *
 * @param rover The rover you want to move
 * @returns a new Rover object with updated co-ordinates
 */
export const moveRover = (rover: Rover): Rover => {
  const [newX, newY] = rover.position;
  let newPosition: [number, number] = [0, 0];

  switch (rover.direction) {
    case 'N':
      newPosition = [newX, newY + 1];
      break;
    case 'S':
      newPosition = [newX, newY - 1];
      break;
    case 'E':
      newPosition = [newX + 1, newY];
      break;
    case 'W':
      newPosition = [newX - 1, newY];
      break;
  }

  return {
    ...rover,
    position: newPosition,
  };
};

export const rotateRover = (rover: Rover, instruction: Omit<RoverInstruction, 'M'>): Rover => {
  const directions: Direction[] = ['N', 'E', 'S', 'W'];
  const directionIndex = directions.indexOf(rover.direction);
  let newDirectionIndex = 0;

  if (instruction === 'L') {
    newDirectionIndex =
      directionIndex - 1 < 0 ? (directions.length - 1) % directions.length : (directionIndex - 1) % directions.length;
  }
  if (instruction === 'R') {
    newDirectionIndex = (directionIndex + 1) % directions.length;
  }

  console.log(directionIndex);
  console.log(newDirectionIndex);
  
  
  return {
    ...rover,
    direction: directions[newDirectionIndex],
  };
};
