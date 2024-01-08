<template>  
  <div class="d-flex flex-wrap">
    <template v-for="(team, index) in favTeamData" :key="team.id">
      <nuxt-link :to='makeURL(team)'>
        <div class="logo" :class="abreviationList[index]"/>
      </nuxt-link>
    </template>
  </div>
</template>

<script setup lang="ts">
const { getAbbreviation } = useTeam();
const { data: favTeamData } = useLocalStorage("favTeams");

const abreviationList = computed(() => (getAbbreviation(favTeamData.value)))

const makeURL = (teamId: number) => (`/team/${teamId}`)
</script>