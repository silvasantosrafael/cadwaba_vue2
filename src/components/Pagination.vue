<template>
  <div>
    <div class="topbar"></div>
    <div class="details">
      <div class="recent">
        <b-table class="text" borderless :items="items" :fields="fields">
          <template v-slot:cell(actions)="data">
            <b-button variant="primary" size="sm" @click="edit(data.id)">Editar</b-button>
            <b-button variant="danger" size="sm" @click="delete(data.id)">Remover</b-button>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import numbersRequests from "../services/numbersRequests";

export default {
  data() {
    return {
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
        {
          key: "actions",
          label: "Ações",
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
</style>