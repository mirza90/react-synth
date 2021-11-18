import React from "react";
import styled from "styled-components";
import { NoteType } from "./helpers";
import Note from "./Note";
import playSound from "./playSounds";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

type Props = {
  notes: NoteType[];
};

const Octave: React.FC<Props> = ({ notes }) => 
{
return (
  <Wrapper>
    <div>
      {notes.map((element: NoteType) => (
        <Note key={element.note} color={element.color} note={element} clickHandler={playSound} />
      ))}
    </div>
  </Wrapper>
);
}
export default Octave;
