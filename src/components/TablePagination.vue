<template>
  <div>
    <b-table
      id="my-table"
      borderless
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template v-slot:cell(Ativo)="data">
        <td v-if="data.value == 1" class="status active badge-active">Ativo</td>
        <td v-else class="status deactive badge-deactive">Desativado</td>
      </template>
    </b-table>

    <b-pagination
      v-if="isActive"
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
  props: {
    listArray: Array,
    isActive: Boolean,
  },
  data() {
    return {
      perPage: 5,
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