<template>
  <div class="tab">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th rowspan="2">pts</th>
          <th rowspan="2">min</th>
          <th colspan="2">All</th>
          <th colspan="2">3pt</th>
          <th colspan="2">ft</th>
          <th colspan="3">RB</th>
          <th rowspan="2">A</th>
          <th rowspan="2">F</th>
          <th rowspan="2">T</th>
          <th rowspan="2">S</th>
          <th rowspan="2">B</th>
        </tr>
        <tr>
          <th>fgm/fga</th>
          <th>fg %</th>
          <th>fg3m/fg3a</th>
          <th>fg3 %</th>
          <th>ftm/fta</th>
          <th>ft %</th>
          <th>O</th>
          <th>D</th>
          <th>ALL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stats in props.statsList" :key="stats.player_id">
          <td>{{ stats.pts }}</td>
          <td>{{ stats.min }}</td>
          <td>{{ stats.fgm }}/{{ stats.fga }}</td>
          <td>{{ (stats.fg_pct * 100).toPrecision(3) }}</td>
          <td>{{ stats.fg3m }}/{{ stats.fg3a }}</td>
          <td v-if="stats.fg3_pct">{{ (stats.fg3_pct * 100).toPrecision(3) }}</td>
          <td v-else>0.00</td>
          <td>{{ stats.ftm }}/{{ stats.fta }}</td>
          <td v-if="stats.ft_pct">{{ (stats.ft_pct * 100).toPrecision(3) }}</td>
          <td v-else>0.00</td>
          <td>{{ stats.oreb }}</td>
          <td>{{ stats.dreb }}</td>
          <td>{{ stats.reb }}</td>
          <td>{{ stats.ast }}</td>
          <td>{{ stats.pf }}</td>
          <td>{{ stats.turnover }}</td>
          <td>{{ stats.stl }}</td>
          <td>{{ stats.blk }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { GameStats } from "@fetchingTypes/GameStats";

interface GameStatsTableProps {
  statsList: GameStats[]
}

const props = defineProps<GameStatsTableProps>()
</script>

<style>
.table  {
  text-align: center;
}
.table th {
  vertical-align: middle;
}

.tab {
  font-size: 1rem;
  margin: 0 2rem;
}
</style>