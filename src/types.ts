export type RoverInstruction = 'L' | 'R' | 'M';

export type Direction = 'N' | 'S' | 'E' | 'W';

export type MarsGrid = { x: number; y: number };

export type Rover = {
  position: { x: number; y: number };
  direction: Direction;
};
