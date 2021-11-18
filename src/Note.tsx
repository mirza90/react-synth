import React from "react";
import styled from "styled-components";
import { NoteType } from "./helpers";

const Black = styled.button`
  background: black;
  width: 40px;
  height: 130px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`;

const White = styled.button`
  background: white;
  width: 60px;
  height: 200px;
  border: 1px solid black;
  margin: 1px;
  box-shadow: 2px 5px;

  :active {
    background: #eee;
  }
`;

type Props = {
  color: string;
  note: NoteType;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Note: React.FC<Props> = ({ color, note, clickHandler }) =>
  color === "white" ? <White value={note.frequency} onClick={clickHandler} /> : <Black value={note.frequency} onClick={clickHandler} />;

export default Note;
