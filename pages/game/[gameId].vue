<template>
  <div>
    <GameTeamsStats :data="teamData.data"></GameTeamsStats>
  </div>
</template>

<script setup lang="ts">
import { FetchingData } from "@fetchingTypes/FetchingData";
import { GameStats } from "@fetchingTypes/GameStats";
import GameTeamsStats from "@components/tables/GameTeamsStats"

const route = useRoute();
const gameId = route.params.gameId;
const season = computed(() => localStorage.getItem("selectedYear"))


const { data: teamData } = await useFetch<FetchingData<GameStats[]>>(`https://www.balldontlie.io/api/v1/stats`, { query: {
  ["game_ids[]"]: gameId,
  // ["seasons[]"]: season.value,
  per_page: 100
} });
</script>