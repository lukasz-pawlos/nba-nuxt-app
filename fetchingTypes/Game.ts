export interface Game {
    id: number;
    date: string;
    home_team_id: number;
    home_team_score: number;
    season: number;
    visitor_team_id: number;
    visitor_team_score: number;
}

export interface GameQuery {
    dates?: Date;
    ["seasons[]"]: number;
    ["team_ids[]"]: number | number[];
}