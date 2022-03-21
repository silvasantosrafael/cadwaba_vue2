<template>
  <div class="details">
    <div v-show="!showDetailsNumber">
      <b-overlay :show="show" spinner-variant="primary" variant="transparent">
        <div class="recent">
          <div class="cardHeader">
            <h3>Todos os números</h3>
          </div>
          <b-table
            :current-page="currentPage"
            :items="this.listAllNumbers"
            :fields="fields"
            :per-page="perPage"
            @row-clicked="getDataNumber"
            borderless
            small>

            <template v-slot:cell(Ativo)="data">
              <td v-if="data.value == 1" class="status active badge-active">Ativo</td>
              <td v-else class="status deactive ">Desativado</td>
            </template>
          </b-table>

          <b-pagination
            v-model="currentPage"
            :total-rows="this.listAllNumbers.length"
            :per-page="perPage"
            align="center"
            class="customPagination">
          </b-pagination>
        </div>
      </b-overlay>
    </div>

    <div v-show="showDetailsNumber">
      <b-overlay :show="show" spinner-variant="primary" variant="transparent">
        <div class="recent">
          <div class="cardHeader">
            <b-button variant="primary" size="sm" @click="showDetailsNumber = false">Voltar</b-button>
            <div class="text-center">
              <h3>WABA: {{ this.listNumber.Waba }}</h3>
              <h6 class="text">BMID: {{ this.listNumber.Bm_id }}</h6>
            </div>
            <span v-if="this.listNumber.Ativo == 1" class="status active badge-active">Ativo</span>
            <span v-else class="status deactive badge-deactive">Desativado</span>
          </div>
          <hr class="text" />
          <div class="table-details table-responsive-lg">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th>Nome:</th>
                  <td>{{ listNumber.Nome_Numero }}</td>
                </tr>
                <tr>
                  <th>Número:</th>
                  <td>{{ this.listNumber.Numero }}</td>
                </tr>
                <tr v-if="this.listNumber.Ativo == 1">
                  <th>Data de ativação:</th>
                  <td>{{ this.listNumber.Data_ativacao }}</td>
                </tr>
                <tr v-else>
                  <th>Data de desativação:</th>
                  <td>{{ this.listNumber.Data_desativacao }}</td>
                </tr>
                <tr>
                  <th>Empresa</th>
                  <td>{{ this.listNumber.Empresa }}</td>
                </tr>
                <tr>
                  <th>Parceiro</th>
                  <td>{{ this.listNumber.Parceiro }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </b-overlay>
    </div>

    <div v-show="showDetailsNumber">
      <b-overlay :show="show" spinner-variant="primary" variant="transparent">
        <div class="moreInfo">
          <div class="number-image-space">
            <b-img
              :src="listNumber.Caminho_imagem"
              rounded="circle"
              alt="Circle image"
              center
              fluid
              class="image-number"
            ></b-img>
          </div>
          <div class="number-more-info text">
            <b>Descrição:</b>
            <p>{{ this.listNumber.Descricao }}</p>
            <b>Endereço:</b>
            <p>{{ this.listNumber.Endereco }}</p>
            <p><b>e-mail:</b> {{ this.listNumber.Email }}</p>
            <p><b>Site:</b> {{ this.listNumber.Site }}</p>
          </div>
        </div>
      </b-overlay>
    </div>
  </div>
</template>

<script>
import numbersRequests from "@/services/numbersRequests";
import {format} from 'date-fns'

export default {
  name: "DashBoardDetails",
  props: {
    listAllNumbers: Array,
    show: Boolean,
  },
  data() {
    return {
      showDetailsNumber: false,
      listNumber: [],
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
          key: "Empresa",
          label: "Empresa",
          sortable: true,
        },
        {
          key: "Parceiro",
          label: "Parceiro",
          sortable: true
        },
        {
          key: "Data_ultima_modificacao",
          label: "Data",
          sortable: true,
          formatter: (date) => {
            date = format(new Date(date),"dd/MM/yyyy");
            return date;
          }
        },
        {
          key: "Ativo",
          label: "Status",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    getDataNumber(data) {
      numbersRequests.getNumber(data.Id).then((response) => {
        this.listNumber = response.data[0];
        console.log(data);
      });
      this.showDetailsNumber = !this.showDetailsNumber;
    },
  },
  mounted(){
    console.log(this.listAllNumbers);
  }
};
</script>

<style scoped>
  table {
    font-size: 0.9em;
  }

  .details .recent table tbody tr:hover {
    background: var(--sidebar-color);
    color: var(--text-color);
    cursor: auto;
  }

  body.dark .details .recent table tbody tr:hover {
    background: var(--sidebar-color);
    color: var(--text-color);
    cursor: auto;
  }

  .details {
	position: relative;
	width: 100%;
	padding: 0px 20px;
	display: grid;
	grid-template-columns: 2fr 0.9fr;
	column-gap: 20px;
}


.table-details tbody{
  padding-right: 160px;
  vertical-align: center;
}

.table-details th{
  padding-left: 160px;
}

</style>