export interface ProblemCard {
  label: string;
  num: string;
  title: string;
  body: string;
}

export interface Benefit {
  label: string;
  title: string;
  body: string;
}

export interface ApproachStep {
  num: string;
  title: string;
  body: string[];
}

export interface ApproachPanel {
  title: string;
  rows: { label: string; bar: string; value: string; tone?: "green" | "dim" | "red" }[];
  note?: string[];
}

export interface Capability {
  num: string;
  title: string;
  body: string;
}

export interface Stat {
  label: string;
  value: string;
  note: string;
}

export interface TerminalLabel {
  title: string;
  sub: string;
}

export interface FaqItem {
  num: string;
  question: string;
  answer: string;
}
