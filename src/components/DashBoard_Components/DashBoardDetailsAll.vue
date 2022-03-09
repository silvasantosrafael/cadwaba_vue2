<template>
  <div>
    <b-table
      id="my-table"
      :current-page="currentPage"
      :items="this.listAllNumbers"
      :fields="fields"
      :per-page="perPage"
      borderless
    >
      <template v-slot:cell(Ativo)="data">
        <td v-if="data.value == 1" class="status active badge-active">Ativo</td>
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
  </div>
</template>

<script>
export default {
  name: "DashBoardDetailsAll",
  props: {
    listAllNumbers: Array,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        {
          key: "Id",
          label: "ID",
          sortable: true,
        },
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
};
</script>