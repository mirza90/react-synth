import React from "react";
import { useSynthSettings } from "./useSynthSettings";

const calculateFrequency = (baseFrequency: number, currentOctave: number) => {
  console.log(baseFrequency);
  console.log(currentOctave);
  return baseFrequency * 2 ** (currentOctave - 4);
};

const playSound = (e: React.MouseEvent<HTMLButtonElement>) => {
  let AudioContext = new window.AudioContext();
  const oscillator = AudioContext.createOscillator();
  oscillator.connect(AudioContext.destination);
  oscillator.type = "sine";
  const currentOctave = 4;
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
  oscillator.stop(AudioContext.currentTime + 0.5);
};

export default playSound;
