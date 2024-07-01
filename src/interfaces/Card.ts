interface ICard {
  id: number;
  name: string;
  date: string;
  thumbnail: string;
  startEndBar: {
    id: number;
    name: string;
  };
  bars: {
    id: number;
    name: string;
  }[];
  winners: {
    id: number;
    name: string;
  }[];
}
