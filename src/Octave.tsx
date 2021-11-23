import React from "react";
import styled from "styled-components";
import { NoteType } from "./helpers";
import Note from "./Note";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

type Props = {
  notes: NoteType[];
  currentOctave: number;
  noteDuration: number;
  waveShape: OscillatorType;
};

const Octave: React.FC<Props> = ({ notes, currentOctave, noteDuration, waveShape }) => {
  return (
    <Wrapper>
      <div>
        {notes.map((element: NoteType) => (
          <Note
            key={element.note}
            color={element.color}
            note={element}
            currentOctave={currentOctave}
            noteDuration={noteDuration}
            waveShape={waveShape}
          />
        ))}
      </div>
    </Wrapper>
  );
};
export default Octave;
