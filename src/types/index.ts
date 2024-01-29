export type PersonInfo = {
  id: number;
  name: string;
  enName: string;
  photo: string;
  sex: string;
  growth: number;
  birthday: string;
  death: string;
  age: number;
  birthPlace: BirthPlace[];
  deathPlace: DeathPlace[];
  spouses: Spouses;
  countAwards: number;
  profession: Profession[];
  facts: Fact[];
  movies: Movie[];
  updatedAt: string;
  createdAt: string;
  error: any;
};

export type BirthPlace = {
  value: string;
};

export type DeathPlace = {
  value: string;
};

export type Spouses = {
  id: number;
  name: string;
  divorced: boolean;
  divorcedReason: string;
  sex: string;
  children: number;
  relation: string;
};

export type Profession = {
  value: string;
};

export type Fact = {
  value: string;
};

export type Movie = {
  id: number;
  name: string;
  alternativeName: string;
  rating: number;
  general: boolean;
  description: string;
  enProfession: string;
};

export type DataType = {
  id: number;
  name: string;
  enName: string;
  photo: string;
  age: number;
  title?: string;
  type?: any;
};

export type DataPersonType = {
  id: number;
  name: string;
  enName: string;
  photo: string;
  age: number;
  sex: string;
};

export type awardsType = {
  nomination: Nomination;
  winning: boolean;
  updatedAt: string;
  createdAt: string;
  personId: number;
  movie: MovieZ;
};

export type Nomination = {
  award: Award;
  title: string;
};

export type Award = {
  title: string;
  year: number;
};

export type MovieZ = {
  id: number;
  name: string;
  rating: number;
};

export type spousesType = {
  spouses:any,
  children:any,
  divorcedReason:any,
  divorced:any
  personId: number
  webUrl: string
  nameRu: string
  nameEn: string
  sex: string
  posterUrl: string
  growth: number
  birthday: string
  death: string
  age: number
  birthplace: string
  deathplace: string
  hasAwards: number
  profession: any
  facts: any[]
}