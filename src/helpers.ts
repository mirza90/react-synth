export type NoteType = {
  note: string;
  color: string;
  frequency: number;
};

export const notes: NoteType[] = [
  {
    note: 'C',
    color: 'white',
    frequency: 261.63
  },
  {
    note: 'CSharp',
    color: 'black',
    frequency: 277.18
  },
  {
    note: 'D',
    color: 'white',
    frequency: 293.66
  },
  {
    note: 'DSharp',
    color: 'black',
    frequency: 311.13
  },
  {
    note: 'E',
    color: 'white',
    frequency: 329.63
  },
  {
    note: 'F',
    color: 'white',
    frequency: 349.23
  },
  {
    note: 'FSharp',
    color: 'black',
    frequency: 369.99
  },
  {
    note: 'G',
    color: 'white',
    frequency: 392.00
  },
  {
    note: 'GSharp',
    color: 'black',
    frequency: 415.30
  },
  {
    note: 'A',
    color: 'white',
    frequency: 440.00
  },
  {
    note: 'ASharp',
    color: 'black',
    frequency: 466.16
  },
  {
    note: 'B',
    color: 'white',
    frequency: 493.88
  }
];
