import React from "react";

type Props = {
  currentWaveShape: string;
  increaseCallback: () => void;
  decreaseCallback: () => void;
};

const WaveShapeButton: React.FC<Props> = ({
  currentWaveShape,
  increaseCallback,
  decreaseCallback,
}) => {
  return (
    <div>
      <button onClick={decreaseCallback}>decrease</button>
      <h1>{currentWaveShape}</h1>
      <button onClick={increaseCallback}>increase</button>
    </div>
  );
};

export default WaveShapeButton;
