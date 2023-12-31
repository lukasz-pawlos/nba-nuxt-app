<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <MainNavbar/>
    <div style="max-width: 850px; padding: 0 30px; text-align: center;"> 
      <h1 style="font-size: 90px; word-wrap:normal;    padding-top: 200px; color: wheat;">Find you player</h1>
      <input type="text" class="form-control form-rounded" placeholder="Text input">
    </div>


  </div>
</template>

<script setup>
import MainNavbar from '/components/mainNavbar/MainNavbar';
import BaseButon from '/components/baseButton/BaseButon.vue';

// import { useLocalStorage } from './composables/useLocalStorage';

// const { data: favPlayersData, getData: getFavPlayers, addData: addFavPlayer, rmData: rmFavPlayer } = useLocalStorage("favplayers");
// const { data: favTeamsData, getData: getFavTeams, addData: addFavTeam, rmData: rmFavTeam } = useLocalStorage("favteams");
// onMounted(() => getData('ex'))

// const { data, pending, error, refresh } = await useFetch('https://www.balldontlie.io/api/v1/players/237', {})


</script>

<style>
.form-rounded {
  border-radius: 30px;
}
</style>