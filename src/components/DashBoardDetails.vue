<template>
  <div class="details">
    <div v-if="showCardAllNumbers" class="recent">
      <div class="cardHeader">
        <h3>Números Recentes</h3>
        <a href="#" class="btnDashboard">Ver todos</a>
      </div>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Número</td>
            <td>Empresa</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recentNumbers in listRecentNumbers" :key="recentNumbers.id">
            <td>{{ recentNumbers.Nome_Numero }}</td>
            <td>{{ recentNumbers.Numero }}</td>
            <td>{{ recentNumbers.Empresa }}</td>
            <td v-if="recentNumbers.Ativo == 1"><span class="status active">Ativo</span></td>
            <td v-else><span class="status deactive">Desativado</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="recent">
      <div class="cardHeader">
        <h3>Todos os números</h3>
        <a href="#" class="btnDashboard">Ver todos</a>
      </div>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Número</td>
            <td>Empresa</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="numbers in listAllNumbers" :key="numbers.id">
            <td>{{ numbers.Nome_Numero }}</td>
            <td>{{ numbers.Numero }}</td>
            <td>{{ numbers.Empresa }}</td>
            <td v-if="numbers.Ativo == 1"><span class="status active">Ativo</span></td>
            <td v-else><span class="status deactive">Desativado</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import Pagination from './Pagination.vue';
// import {range} from 'lodash'

export default {
  // components: { Pagination },
  name: "DashBoardDetails",
  props: {
    listAllNumbers: Array,
    listRecentNumbers: Array,
    showCardAllNumbers: Boolean,
  }
};
</script>