<template>
  <div>
    <b-table borderless :items="listAllNumbers" :fields="fields" per-page="5" sort-desc>
      <template v-slot:cell(Ativo)="data">
        <td v-if="data.value == 1" class="status active badge-active">Ativo</td>
        <td v-else class="status deactive badge-deactive">Desativado</td>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "DashBoardDetailsRecents",
  props: {
    listAllNumbers: Array,
  },
  data() {
    return {
      fields: [
        {
          key: "Id",
          label: "ID",
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
};
</script>