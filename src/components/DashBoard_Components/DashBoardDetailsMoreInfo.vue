<template>
  <div>
   
  </div>
</template>

<script>
// import numbersRequests from "@/services/numbersRequests";

export default {
  name: "DashBoardDetailsMoreInfo",
  data() {
    return {
      listNumber: [],
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
};
</script>