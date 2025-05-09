export interface ILeague {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  id: string;
  season: string;
}

export interface Response {
  league: LeagueClass;
  country: Country;
  seasons: Season[];
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface LeagueClass {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface Season {
  year: number;
  start: Date;
  end: Date;
  current: boolean;
  coverage: Coverage;
}

export interface Coverage {
  fixtures: Fixtures;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

export interface Fixtures {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}
