import React from "react";
import { SettingsPanel, SettingsButton, SettingsText } from "./SettingsStyledComponents";

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
    <SettingsPanel>
      <SettingsButton onClick={decreaseCallback}>-</SettingsButton>
      <SettingsText>{noteDuration}</SettingsText>
      <SettingsButton onClick={increaseCallback}>+</SettingsButton>
    </SettingsPanel>
  );
};

export default DurationButton;
