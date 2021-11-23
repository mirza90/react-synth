import React from "react";
import { SettingsPanel, SettingsButton, SettingsText } from "./SettingsStyledComponents";

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
    <SettingsPanel>
      <SettingsButton onClick={decreaseCallback}>-</SettingsButton>
      <SettingsText>{currentWaveShape}</SettingsText>
      <SettingsButton onClick={increaseCallback}>+</SettingsButton>
    </SettingsPanel>
  );
};

export default WaveShapeButton;
