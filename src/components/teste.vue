<template>
  <b-container>
      <div class="espaco-cartao">
        <b-card class="cartao">
          <div>
            <div class="numbers" id="tel">20</div>
            <div class="cardName">Total de números</div>
          </div>
        </b-card>
        <b-card class="cartao">
          <div>
            <div class="numbers" id="tel">20</div>
            <div class="cardName">Números ativos</div>
          </div>
        </b-card>
        <b-card class="cartao">
          <div>
            <div class="numbers" id="tel">20</div>
            <div class="cardName">Números desativados</div>
          </div>
        </b-card>
      </div>
      <div class="espaco-detalhes">
        <b-card class="cartao">
          <b-table
            borderless
            :items="listAllNumbers"
            :fields="fields"
            per-page="5"
          >
            <template v-slot:cell(Ativo)="data">
              <td v-if="data.value == 1" class="status active badge-active">
                Ativo
              </td>
              <td v-else class="status deactive badge-deactive">Desativado</td>
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="this.listAllNumbers.length"
            :per-page="perPage"
            aria-controls="my-table"
            align="center"
            class="customPagination"
          >
          </b-pagination>
        </b-card>
      </div>
  </b-container>
</template>

<script>
import numbersRequests from "@/services/numbersRequests";
export default {
  data() {
    return {
      listAllNumbers: [],
      perPage: 5,
      currentPage: 1,
      fields: [
        {
          key: "Nome_Numero",
          label: "Nome",
          sortable: true,
        },
        {
          key: "Numero",
          label: "Número",
          sortable: true,
        },
        {
          key: "Waba",
          label: "WABA",
          sortable: true,
        },
        {
          key: "Ativo",
          label: "Status",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    numbersRequests.getAllNumbers().then((response) => {
      var data = response.data;
      this.listAllNumbers = data;
    });
  },
};
</script>

<style scoped>

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box!important;
	font-family: 'Ubuntu', sans-serif !important;
}

.container {
  position: absolute;
	top: 0;
	left: 250px;
	height: 100vh!important;
  width: calc(100% - 250px);
  background: var(--bs-indigo);
}

.espaco-cartao {
  position: relative;
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.cartao {
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
}

.espaco-cartao .cartao .numbers {
  position: relative;
  font-weight: 500;
  font-size: 1.6em;
  color: var(--primary-color);
}

.espaco-cartao .cartao .cardName {
  color: var(--text-color);
  font-size: 1.1em;
  margin-top: 10px;
}

.espaco-detalhes {
  padding: 0px 30px;
}

@media (max-height: 618px) {

	.espaco-detalhes .cartao{
		font-size: 1em!important;
	}

}

</style>