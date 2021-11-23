import React from "react";
import { SettingsPanel, SettingsButton, SettingsText } from "./SettingsStyledComponents";

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
    <SettingsPanel>
      <SettingsButton onClick={decreaseCallback}>-</SettingsButton>
      <SettingsText>{currentOctave}</SettingsText>
      <SettingsButton onClick={increaseCallback}>+</SettingsButton>
    </SettingsPanel>
  );
};

export default OctaveButton;
