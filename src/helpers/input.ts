import { MarsGrid, Rover, RoverInstruction, Direction } from '../types';
import { createRover } from './rover';

type ParsedInstructions = {
  grid: MarsGrid;
  rovers: {
    rover: Rover;
    instructions: RoverInstruction[];
  }[];
};

export const parseInstructions = (input: string): ParsedInstructions => {
  const [gridInput, ...roverInput] = input
    .trim()
    .split('\n')
    .map((l) => l.trim());

  
  const [gridX, gridY] = gridInput.split(' ').map(Number);
  
  const roverArray = [];
  for (let i = 0; i < roverInput.length; i += 2) {
    roverArray.push(roverInput.slice(i, i + 2));
  }

  const rovers = roverArray.map(line => {
    const [x, y, d] = line[0].split(' ');
    const instructions = line[1].split('').filter(char => ['L','R', 'M'].includes(char)) as RoverInstruction[];
    return {
      rover: createRover(parseInt(x), parseInt(y), d as Direction),
      instructions
    }
  });

  return {
    grid: { x: gridX, y: gridY },
    rovers
  };
};
