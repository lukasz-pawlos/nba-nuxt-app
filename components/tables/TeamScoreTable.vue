<template>
  <div class="tab">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Home team</th>
          <th scope="col">Score</th>
          <th scope="col">Visitor team</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in pageData" :key="game.id">
          <th>{{ game.date.split("T")[0] }}</th>
            <td>
              <nuxt-link :to="'/team/' + game.home_team.id">
                <span v-if="pageTeamWin(game.home_team_id, game.home_team_score, game.visitor_team_score)" 
                  :class="{ 'text-success': pageTeamWin(game.home_team_id, game.home_team_score, game.visitor_team_score)}">
                  {{ game.home_team.full_name }}
                </span>
                <span v-if="!pageTeamWin(game.home_team_id, game.home_team_score, game.visitor_team_score)" 
                  :class="{ 'text-danger': !pageTeamWin(game.home_team_id, game.home_team_score, game.visitor_team_score)}">
                  {{ game.home_team.full_name }}
                </span> 
              </nuxt-link>
            </td>
          <td>
            <nuxt-link :to="'/game/' + game.id">
              {{ game.home_team_score }}  :  {{ game.visitor_team_score }}
            </nuxt-link>
          </td>
          <td>
            <nuxt-link :to="'/team/' + game.visitor_team.id">
              <span v-if="!pageTeamWin(game.home_team_id, game.home_team_score, game.visitor_team_score)" 
                  :class="{ 'text-success': !pageTeamWin(game.home_team_id, game.home_team_score, game.visitor_team_score)}">
                  {{ game.visitor_team.full_name }}
              </span>
                <span v-if="pageTeamWin(game.home_team_id, game.home_team_score, game.visitor_team_score)" 
                  :class="{ 'text-danger': pageTeamWin(game.home_team_id, game.home_team_score, game.visitor_team_score)}">
                  {{ game.visitor_team.full_name }}               
              </span> 
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { FetchingData } from "@fetchingTypes/FetchingData";
import { Game } from "@fetchingTypes/Game";

interface TeamScoreTableProps {
  season?: number;
  teamId: number
}

const props = defineProps<TeamScoreTableProps>()

const season = computed(() => localStorage.getItem("selectedYear"))

const { data: gamesData } = await useFetch<FetchingData<Game[]>>(`https://www.balldontlie.io/api/v1/games`, { query: {
  ["team_ids[]"]: props.teamId,
  ["seasons[]"]: season.value,
} });

const pageData = ref();
const total_pages = ref();
const current_page = ref();

const pageTeamWin = (homeTeamId: number, homeScore: number, visitorScore: number): boolean => {
  const homeTeamWin = homeScore > visitorScore;
  return homeTeamId !== props.teamId ? homeTeamWin : homeTeamWin ? false : true
}

const getMoreData = () => {
  window.onscroll = async () => {
    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
    if (bottomOfWindow && total_pages.value !== current_page.value) {
      const { data: gamesDatas } = await useFetch<FetchingData<Game[]>>(`https://www.balldontlie.io/api/v1/games`, { query: {
      ["team_ids[]"]: props.teamId,
      ["seasons[]"]: season.value,
      page: current_page.value + 1
      } });

      const newData = pageData.value;
      pageData.value = newData.concat(gamesDatas.value?.data);
      total_pages.value = gamesDatas.value?.meta?.total_pages;
      current_page.value = gamesDatas.value?.meta?.current_page;
    };
  }
}
onBeforeMount(() => {
  pageData.value = gamesData.value?.data;
  total_pages.value = gamesData.value?.meta?.total_pages;
  current_page.value = gamesData.value?.meta?.current_page;
})
onMounted(() => getMoreData());
</script>

<style>
.table {
  font-size: 1rem;
}
.tab {
  margin: 0 2rem;
}
</style>