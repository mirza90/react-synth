import React from "react";
import { useState } from "react";
import Octave from "./Octave";
import { notes } from "./helpers";
import OctaveButton from "./OctaveButton";
import DurationButton from "./DurationButton";
import WaveShapeButton from "./WaveShapeButton";

type Props = {};
const Synth: React.FC<Props> = () => {
  const [currentOctave, setCurrentOctave] = useState(4);
  const [noteDuration, setNoteDuration] = useState(500);
  const [waveShapeIndex, setWaveShapeIndex] = useState(0);

  const waveShapes : OscillatorType[] = ["sine", "sawtooth", "square", "triangle"];

  const increaseOctave = () => setCurrentOctave((prev) => prev + 1);
  const decreaseOctave = () => setCurrentOctave((prev) => prev - 1);

  const increaseNoteDuration = () => setNoteDuration((prev) => prev + 100);
  const decreaseNoteDuration = () => setNoteDuration((prev) => prev - 100);

  const increaseWaveShapeIndex = () =>
    setWaveShapeIndex((prev) =>
      prev === waveShapes.length - 1 ? 0 : prev + 1
    );
  const decreaseWaveShapeIndex = () =>
    setWaveShapeIndex((prev) =>
      prev === 0 ? waveShapes.length - 1 : prev - 1
    );

  return (
    <div>
      <div>
        <Octave
          notes={notes}
          currentOctave={currentOctave}
          noteDuration={noteDuration}
          waveShape={waveShapes[waveShapeIndex]}
        />
      </div>
      <div>
        <OctaveButton
          currentOctave={currentOctave}
          increaseCallback={increaseOctave}
          decreaseCallback={decreaseOctave}
        />
      </div>
      <div>
        <DurationButton
          noteDuration={noteDuration}
          increaseCallback={increaseNoteDuration}
          decreaseCallback={decreaseNoteDuration}
        />
      </div>
      <div>
        <WaveShapeButton
          currentWaveShape={waveShapes[waveShapeIndex]}
          increaseCallback={increaseWaveShapeIndex}
          decreaseCallback={decreaseWaveShapeIndex}
        />
      </div>
    </div>
  );
};

export default Synth;
