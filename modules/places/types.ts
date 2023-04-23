export enum Sports {
  Tennis = "tennis",
  Squash = "squash",
}

type CourtType = "clay" | "hard";
type Coverage = "on air" | "covered";

export interface Court {
  type: CourtType;
  coverage: Coverage;
}

export interface Review {
  author: {
    name: string;
  };
  content: string;
  rate: number;
}
export interface Tennis {
  type: Sports.Tennis;
  name: string;
  courts: Court[];
}

export type Sport = Tennis;
export interface Place {
  id: string;
  name: string;
  reviews: {
    average: string;
    amount: number;
  };
  reviewsList?: Review[];
  sports: Sport[];
}
