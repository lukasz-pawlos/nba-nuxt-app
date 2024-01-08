<template>
  <div>
    <div class="d-flex align-items-center">
      <div class="logo" :class="teamData?.abbreviation"></div>
      <h1>{{ teamData?.full_name }}</h1>
      <StarButton @click="favClick" :active="isFav"></StarButton>
    </div>
    
    <TeamScoreTable :teamId="teamId" :season="2023"/>
  </div>
</template>

<script setup lang="ts">
import { Team } from "@fetchingTypes/Team";
import TeamScoreTable from "@components/tables/TeamScoreTable.vue";
import StarButton from "@components/buttons/starButton/StarButton.vue";

const { data: favTeamData, getData: getFavTeam, addData: addFavTeam, rmData: rmFavTeam } = useLocalStorage("favTeams");
const route = useRoute();
const teamId = route.params.teamId;

const { data: teamData } = await useFetch<Team>(`https://www.balldontlie.io/api/v1/teams/${teamId}`);
const makeURL = (teamId: number) => (`/team/${teamId}`);

const favClick = () => {
  isFav.value ? rmFavTeam(teamId) : addFavTeam(teamId);
}

const isFav = computed(() => (favTeamData.value.includes(teamId)));
</script>