<template>
  <div class="d-flex align-items-center">
    <div class="logo" :class="homeTeamData[0].team.abbreviation"/>
    <h1>
      {{ homeTeamData[0].team.full_name }}
    </h1>
  </div>
  <GameStatsTable :statsList="homeTeamData"/>
  <div class="d-flex align-items-center">
    <div class="logo" :class="visitorTeamData[0].team.abbreviation"/>
    <h1>
      {{ visitorTeamData[0].team.full_name }}
    </h1>
  </div>
  <GameStatsTable :statsList="visitorTeamData"/>
</template>

<script setup lang="ts">
import { GameStats } from "@fetchingTypes/GameStats";
import GameStatsTable from "@components/tables/GameStatsTable"

interface GameTeamsStatsProps {
  data: GameStats[]
}

const props = defineProps<GameTeamsStatsProps>()

const homeTeamData = computed(() => props.data.filter(data => data.game.home_team_id === data.team.id && data.min !== null)
  .sort((a, b) => b.pts - a.pts));
const visitorTeamData = computed(() => props.data.filter((data) => data.game.visitor_team_id === data.team.id && data.min !== null)
  .sort((a, b) => b.pts - a.pts));
</script>

<style>
.table  {
  text-align: center;
}
.table th {
  vertical-align: middle;
}

.tab {
  margin: 0 2rem;
}
</style>