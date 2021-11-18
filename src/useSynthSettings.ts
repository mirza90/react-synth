import { useState } from "react";

export const useSynthSettings = () => {
  const [synthSettings, setSynthSettings] = useState({
    currentOctave: 4,
  });

  return [synthSettings];
};
