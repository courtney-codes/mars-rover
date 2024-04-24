import './App.css';
import { Container, RoverInput, Button } from './components/styles';
import { useState } from 'react';
import { parseInstructions } from './helpers/input';
import { executeRoverInstruction } from './roverCommand';
import { Rover } from './types';
import { printRoverOutput } from './helpers/rover';

function App() {
  const [roverInput, setRoverInput] = useState('');
  const [rovers, setRovers] = useState<Rover[]>([]);

  const executeInstructions = () => {
    const parsedInput = parseInstructions(roverInput);
    const completedRovers = parsedInput.rovers.map(({ rover, instructions }) =>
      executeRoverInstruction(parsedInput.grid, rover, instructions)
    );
    setRovers(completedRovers);
  };

  return (
    <Container>
      <h1>Mars Rover Challenge</h1>
      <RoverInput value={roverInput} onChange={(e) => setRoverInput(e.target.value)} />
      <Button onClick={executeInstructions}>Execute!</Button>
      {rovers.map((rover, i) => (
        <p>
          Rover {i + 1} is at position {printRoverOutput(rover)}
        </p>
      ))}
    </Container>
  );
}

export default App;
