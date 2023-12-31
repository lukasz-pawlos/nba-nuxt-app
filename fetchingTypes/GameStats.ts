import { Game } from "@fetchingTypes/Game";
import { Player } from "@fetchingTypes/Player";
import { Team } from "@fetchingTypes/Team";

export interface PlayerGameStats {
    id: number;
    ast: number;
    blk: number;
    dreb: number;
    fg3_pct: number;
    fg3a: number;
    fg3m: number;
    fg_pct: number;
    fga: number;
    fgm: number;
    ft_pct: number;
    fta: number;
    ftm: number;
    game: Game;
    min: string;
    oreb: number;
    pf: number;
    player: Player;
    pts: number;
    reb: number;
    stl: number;
    team: Team;
    turnover: number;
}

export interface PlayerGameStatsQuery {
    dates?: Date;
    ["seasons[]"]: number;
    ["player_ids[]"]?: number | number[];
    ["game_ids[]"]?: number | number[];
}