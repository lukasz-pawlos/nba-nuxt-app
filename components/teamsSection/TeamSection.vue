<template>
  <div class="d-flex flex-wrap">
    <template v-for="team in data.data" :key="team.id">
      <nuxt-link :to='makeURL(team.id)'>
        <div class="logo" :class="team.abbreviation"/>
      </nuxt-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { FetchingData } from "@fetchingTypes/FetchingData";
import { Team } from "@fetchingTypes/Team";

const { data } = await useFetch<FetchingData<Team>>('https://www.balldontlie.io/api/v1/teams');

const makeURL = (teamId: number) => (`/team/${teamId}`)

</script>