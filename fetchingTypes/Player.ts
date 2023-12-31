import { Team } from "@fetchingTypes/Team";

export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height_feet?: number;
    height_inches?: number;
    weight_pounds?: number;
    team?: Team;
    team_id?: number
  }