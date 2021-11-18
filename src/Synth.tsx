import React from "react";
import Octave from "./Octave";
import { notes } from "./helpers";

type Props = {};

const Synth: React.FC<Props> = () => {
  return (<div><Octave notes={notes} /></div>);
};

export default Synth;
