import React from "react";

type Props = {
  noteDuration: number;
  increaseCallback: () => void;
  decreaseCallback: () => void;
};

const DurationButton: React.FC<Props> = ({
  noteDuration,
  increaseCallback,
  decreaseCallback,
}) => {
  return (
    <div>
      <button onClick={decreaseCallback}>decrease</button>
      <h1>{noteDuration}</h1>
      <button onClick={increaseCallback}>increase</button>
    </div>
  );
};

export default DurationButton;
