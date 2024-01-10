<template>
  <div>
    <div class="text-center">
      <div class="d-flex align-items-center">
        <div class="logo" :class="playerStatsData.data[0].team.abbreviation"></div>
        <h1>{{ playerStatsData.data[0].team.full_name }}</h1>
      </div>
      <h2 class="playerName">{{ playerStatsData.data[0].player.first_name }}  {{ playerStatsData.data[0].player.last_name }}</h2>
    </div>
    <h3>AVG stats</h3>
    <AvgStatsTable :statsList="playerAVGStatsData.data"/>
    <h3>Games stats</h3>
    <GamePlayerStats :statsList="playerStatsData.data" />
  </div>
</template>

<script setup lang="ts">
import { FetchingData } from "@fetchingTypes/FetchingData";
import { GameStats } from "@fetchingTypes/GameStats";
import GamePlayerStats from "@components/tables/GamePlayerStats"
import AvgStatsTable from "@components/tables/AvgStatsTable"

const route = useRoute();
const playerId = route.params.playerId;
const season = computed(() => localStorage.getItem("selectedYear"))


const { data: playerStatsData } = await useFetch<FetchingData<GameStats[]>>(`https://www.balldontlie.io/api/v1/stats`, { query: {
  ["player_ids[]"]: playerId,
  ["seasons[]"]: season.value,
  per_page: 100
} });

const { data: playerAVGStatsData } = await useFetch<FetchingData<GameStats[]>>(`https://www.balldontlie.io/api/v1/season_averages`, { query: {
  ["player_ids[]"]: playerId,
  ["seasons[]"]: season.value,
} });

</script>
<style>
.playerName {
  display: inline-block;
}
</style>