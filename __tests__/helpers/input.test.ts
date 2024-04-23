import { parseInstructions } from '../../src/helpers/input';

describe('parseInstructions', () => {
  it('should parse the input into a correct output', () => {
    const input = `5 5
    1 2 N
    LMLMLMLMM 
    3 3 E 
    MMRMMRMRRM
    `;

    const output = parseInstructions(input);

    expect(output.grid).toEqual({ x: 5, y: 5 });
    expect(output.rovers[0].rover).toEqual({ position: { x: 1, y: 2 }, direction: 'N' });
    expect(output.rovers[0].instructions).toEqual(['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);
    expect(output.rovers[1].rover).toEqual({ position: { x: 3, y: 3 }, direction: 'E' });
    expect(output.rovers[1].instructions).toEqual(['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']);
  });

  it('should ignore any instructions that are not L, R, or M', () => {
    const input = `5 5
    1 2 N
    LMLMQLMQLMQQM`;

    const output = parseInstructions(input);
    expect(output.rovers[0].instructions).not.toContain('Q');
  });
});
