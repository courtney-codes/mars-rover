export type RoverInstruction = 'L' | 'R' | 'M';

export type Direction = 'N' | 'S' | 'E' | 'W';

export type Rover = {
  position: [number, number];
  direction: Direction;
};
