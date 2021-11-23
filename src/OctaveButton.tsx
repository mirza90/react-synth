import React from "react";

type Props = {
  currentOctave: number;
  increaseCallback: () => void;
  decreaseCallback: () => void;
};

const OctaveButton: React.FC<Props> = ({
  currentOctave,
  increaseCallback,
  decreaseCallback,
}) => {
  return (
    <div>
      <button onClick={decreaseCallback}>decrease</button>
      <h1>{currentOctave}</h1>
      <button onClick={increaseCallback}>increase</button>
    </div>
  );
};

export default OctaveButton;
