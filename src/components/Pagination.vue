<template>
  <div class="content">
    <div class="content-table">
      <b-table id="my-table" borderless class="text" :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage">
        <template v-slot:cell(Ativo)="data">
          <td v-if="data.value == 1" class="status active badge-active">Ativo</td>
          <td v-else class="status deactive badge-deactive">Desativado</td>
        </template>
      </b-table>
      <div>
      </div>
    </div>
 
    <b-pagination
      v-model="currentPage"
      :total-rows="this.items.length"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
      class="customPagination"
    >
    </b-pagination>

  </div>
</template>

<script>
import numbersRequests from "../services/numbersRequests";

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: [],
      fields: [
        {
          key: "Id",
          label: "ID",
          sortable: true,
        },
        {
          key: "Nome_Numero",
          label: "Nome",
        },
        {
          key: "Numero",
          label: "Número",
        },
        {
          key: "Waba",
          label: "WABA",
        },
        {
          key: "Ativo",
          label: "Status",
        },
      ],
    };
  },
  mounted() {
    numbersRequests.getAllNumbers().then((response) => {
      this.items = response.data;
    });
  },
};
</script>

<style scoped>

  ::v-deep .sr-only {
    display: none;
  }

  .badge-active,
  .badge-deactive {
    padding: 1px 14px!important;
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 8px 20px;
  }

  .content .content-table {
    background: var(--sidebar-color);
    padding: 20px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }

  .content-table .text {
    color: #707070;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  }

  .customPagination {
    margin-top: 60px;
  }

</style>