interface IContenders {
  contenders: IContender[];
}

interface IContender {
  id: number;
  name: string;
  wins: number;
}
