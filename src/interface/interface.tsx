export interface ISection {
  title: string;
  dataApi: IData;
  valSearch: string;
  setValSearch: any;
}

export interface IContainer {
  dataApi: IData;
  valSearch: string;
  goToDetails: () => void;
}
export interface IData {
  info: Info;
  results: IResults[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface IcountFooter {
  count: number;
  pages: number;
}

export interface IResults {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}
