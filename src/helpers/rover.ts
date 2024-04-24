import { Direction, MarsGrid, Rover, RoverInstruction } from '../types';

/**
 *
 * @param x The horizontal position of the rover
 * @param y The vertical position of the rover on the grid
 * @param direction The current heading of the rover, north, south, east, or west
 * @returns
 */
export const createRover = (grid: MarsGrid, initialX: number, initialY: number, direction: Direction): Rover => {
  return {
    direction,
    position: {
      x: initialX <= grid.x ? initialX : grid.x,
      y: initialY <= grid.y ? initialY : grid.y,
    },
  };
};

/**
 * Moves a rover forward one place, taking into account its heading (direction).
 *
 * @param rover The rover you want to move
 * @returns a new Rover object with updated co-ordinates
 */
export const moveRover = (rover: Rover, grid: MarsGrid): Rover => {
  const { position: newPosition } = rover;

  switch (rover.direction) {
    case 'N':
      if (newPosition.y < grid.y) newPosition.y++;
      break;
    case 'S':
      if (newPosition.y > 0) newPosition.y--;
      break;
    case 'E':
      if (newPosition.x < grid.x) newPosition.x++;
      break;
    case 'W':
      if (newPosition.x > 0) newPosition.x--;
      break;
  }

  return {
    ...rover,
    position: newPosition,
  };
};

/**
 * Rotates the rover left or right 90 degrees from its current heading
 *
 * @param rover The rover you want to rotate
 * @param instruction A rotate instruction, either L or R
 * @returns a new Rover with updated direction
 */
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

  return {
    ...rover,
    direction: directions[newDirectionIndex],
  };
};

export const printRoverOutput = (rover: Rover) => `${rover.position.x} ${rover.position.y} ${rover.direction}`;
