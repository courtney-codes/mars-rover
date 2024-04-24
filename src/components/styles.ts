import styled from 'styled-components';

export const Container = styled.div`
  background: #2e3144;
  border-radius: 12px;
  padding: 2em;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const RoverInput = styled.textarea`
  height: 8em;
  background: #181818;
  font-size: 2em;
  border-radius: 0.5em;
  font-family: "Space Mono", monospace;
  color: lightblue;
  resize: none;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  margin-bottom: 1em;
`
