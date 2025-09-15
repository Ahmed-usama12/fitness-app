export type Level = {
  _id: string;
  name: string;
};

export type LevelsResponse = {
  message: string;
  levels: Level[];
};
