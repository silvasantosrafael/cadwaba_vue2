<template>
  <div class="details">
    <div class="recent" v-show="!showDetailsNumber">
      <div class="cardHeader">
        <h3>Todos os números</h3>
      </div>
      <b-table
        :current-page="currentPage"
        :items="this.listAllNumbers"
        :fields="fields"
        :per-page="perPage"
        :busy="isBusy"
        borderless
        small
      >
        <template v-slot:cell(Ativo)="data">
          <td v-if="data.value == 1" class="status active badge-active">
            Ativo
          </td>
          <td v-else class="status deactive badge-deactive">Desativado</td>
        </template>
        <template v-slot:cell(info)="data">
          <a href="#" @click="getDataNumber(data.item.Id)"
            ><i class="bx bx-file-find"></i
          ></a>
        </template>
        <template #table-busy>
          <div class="text-center text-primary my-4">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Carregando...</strong>
          </div>
        </template>
      </b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="this.listAllNumbers.length"
        :per-page="perPage"
        align="center"
        class="customPagination"
      >
      </b-pagination>
    </div>

    <div class="recent" v-show="showDetailsNumber">
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
      <div class="table-responsive-lg">
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

    <div class="moreInfo" v-show="showDetailsNumber">
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
        <p>
          Somos uma empresa com um conceito inovador em planos de saúde,
          especialistas no público 45+ e com foco na qualidade de vida, na saúde
          e no bem-estar dos nossos clientes.
        </p>
        <b>Endereço:</b>
        <p>
          Rua Engenheiro Enaldo Cravo Peixoto 215 – Loja B – Tijuca – Rio de
          Janeiro – RJ
        </p>
        <p><b>e-mail:</b> atendimento@levesaude.com.br</p>
        <p><b>Site:</b> https://levesaude.com.br/</p>
      </div>
    </div>
  </div>
</template>

<script>
import numbersRequests from "@/services/numbersRequests";

export default {
  name: "DashBoardDetails",
  props: {
    listAllNumbers: Array,
    isBusy: Boolean,
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
          key: "Ativo",
          label: "Status",
          sortable: true,
        },
        {
          key: "info",
          label: "Info",
        },
      ],
    };
  },
  methods: {
    getDataNumber(id) {
      numbersRequests.getNumber(id).then((response) => {
        this.listNumber = response.data[0];
        console.log(this.listNumber);
      });

      this.showDetailsNumber = !this.showDetailsNumber;
    },
  },
};
</script>