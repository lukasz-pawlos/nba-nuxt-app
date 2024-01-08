export const useTeam = () => {
  const teams = [
    {"id": 1, "abbreviation": "ATL"},
    {"id": 2, "abbreviation": "BOS"},
    {"id": 3, "abbreviation": "BKN"},
    {"id": 4, "abbreviation": "CHA"},
    {"id": 5, "abbreviation": "CHI"},
    {"id": 6, "abbreviation": "CLE"},
    {"id": 7, "abbreviation": "DAL"},
    {"id": 8, "abbreviation": "DEN"},
    {"id": 9, "abbreviation": "DET"},
    {"id": 10, "abbreviation": "GSW"},
    {"id": 11, "abbreviation": "HOU"},
    {"id": 12, "abbreviation": "IND"},
    {"id": 13, "abbreviation": "LAC"},
    {"id": 14, "abbreviation": "LAL"},
    {"id": 15, "abbreviation": "MEM"},
    {"id": 16, "abbreviation": "MIA"},
    {"id": 17, "abbreviation": "MIL"},
    {"id": 18, "abbreviation": "MIN"},
    {"id": 19, "abbreviation": "NOP"},
    {"id": 20, "abbreviation": "NYK"},
    {"id": 21, "abbreviation": "OKC"},
    {"id": 22, "abbreviation": "ORL"},
    {"id": 23, "abbreviation": "PHI"},
    {"id": 24, "abbreviation": "PHX"},
    {"id": 25, "abbreviation": "POR"},
    {"id": 26, "abbreviation": "SAC"},
    {"id": 27, "abbreviation": "SAS"},
    {"id": 28, "abbreviation": "TOR"},
    {"id": 29, "abbreviation": "UTA"},
    {"id": 30, "abbreviation": "WAS"}
  ]

  const getAbbreviation = (teamIds: (number | string)[]) => {
    return teamIds.map((teamId) => {
      const numericTeamId = typeof teamId === 'string' ? parseInt(teamId, 10) : teamId;
      const team = teams.find(t => t.id === numericTeamId);

      if (team)
        return team.abbreviation;
    })};


  return { getAbbreviation }
}