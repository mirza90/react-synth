import React from "react";
import styled from "styled-components";
import { NoteType } from "./helpers";
import Note from "./Note";
import { keysToNotes } from "./helpers";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
        {keysToNotes.map((element: string, index: number) => (
          <Note
            key={notes[index].note}
            color={notes[index].color}
            note={notes[index]}
            currentOctave={currentOctave}
            noteDuration={noteDuration}
            waveShape={waveShape}
            keyboardCode={element}
          />
        ))}
      </div>
    </Wrapper>
  );
};
export default Octave;
