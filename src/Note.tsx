import React from "react";
import styled from "styled-components";
import { NoteType } from "./helpers";

const Black = styled.button`
  background: black;
  width: 40px;
  height: 130px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`;

const White = styled.button`
  background: white;
  width: 60px;
  height: 200px;
  border: 1px solid black;
  margin: 1px;
  box-shadow: 2px 5px;

  :active {
    background: #eee;
  }
`;

type Props = {
  color: string;
  note: NoteType;
  currentOctave: number;
  noteDuration: number;
  waveShape: OscillatorType;
};

const Note: React.FC<Props> = ({ color, note, currentOctave, noteDuration, waveShape }) => {
    const calculateFrequency = (baseFrequency: number, currentOctave: number) => {
        console.log(baseFrequency);
        console.log(currentOctave);
        return baseFrequency * 2 ** (currentOctave - 4);
      };
      
      const playSound = (e: React.MouseEvent<HTMLButtonElement>) => {
        let AudioContext = new window.AudioContext();
        const oscillator = AudioContext.createOscillator();
        oscillator.connect(AudioContext.destination);
        oscillator.type = waveShape;
        const actualFrequency = calculateFrequency(
          Number(e.currentTarget.value),
          currentOctave
        );
        console.log(actualFrequency);
        oscillator.frequency.setValueAtTime(
          actualFrequency,
          AudioContext.currentTime
        );
        oscillator.start(AudioContext.currentTime);
        oscillator.stop(AudioContext.currentTime + noteDuration / 1000);
      };
      

  return color === "white" ? (
    <White value={note.frequency} onClick={playSound} />
  ) : (
    <Black value={note.frequency} onClick={playSound} />
  );
};
export default Note;
