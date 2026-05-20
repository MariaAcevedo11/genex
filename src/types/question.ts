export interface Option {
  text: string;
  points: {
    [tribeId: string]: number;
  };
}

export interface Question {
  question: string;

  options: {
    a: Option;
    b: Option;
    c: Option;
    d: Option;
  };
}
