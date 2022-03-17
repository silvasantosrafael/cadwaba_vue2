<template>
  <div class="mainPrincipal">
    <!-- Component Cards -->
    <DashBoardCards
      :totalNumbers="totalNumbers"
      :totalNumbersActive="totalNumbersActive"
      :totalNumbersDeactived="totalNumbersDeactived"
      :show="show"
    />

    <!-- Component Datails -->
    <DashBoardDetails :listAllNumbers="listAllNumbers" :show="show" />
  </div>
</template>

<script>
import numbersRequests from "@/services/numbersRequests";
import DashBoardCards from "./DashBoardCards.vue";
import DashBoardDetails from "./DashBoardDetails.vue";

export default {
  components: { DashBoardCards, DashBoardDetails },
  name: "DashBoard",
  data() {
    return {
      listAllNumbers: [],
      totalNumbers: null,
      totalNumbersActive: null,
      totalNumbersDeactived: null,
      isBusy: true,
      show: true,
    };
  },
  methods: {
    getAllNumbers() {
      numbersRequests
        .getAllNumbers()
        .then((response) => {
          let dataResponse = response.data;
          let listActive = [];
          let listDeactive = [];

          if (response.status == 200) {
            this.isBusy = false;
            this.show = false;
          }

          this.listAllNumbers = dataResponse.reverse();
          // Data for Component Card
          this.totalNumbers = dataResponse.length;
          this.totalNumbersActive = listActive.length;
          this.totalNumbersDeactived = listDeactive.length;

          //Get the number of items by status
          for (let index = 0; index < dataResponse.length; index++) {
            if (dataResponse[index].Ativo == 1) {
              listActive.push(dataResponse[index]);
              this.totalNumbersActive = listActive.length;
            } else {
              listDeactive.push(dataResponse[index]);
              this.totalNumbersDeactived = listDeactive.length;
            }
          }
        })
        .catch((error) => {
          this.isBusy = true;
          this.show = true;
          this.$bvToast.toast("Falha ao carregar dados da API", {
            title: "Erro",
            variant: "warning",
            autoHideDelay: 5000,
            solid: true,
          });
          console.log(error);
        });
    },
  },
  created() {
    this.getAllNumbers();

    setInterval(() => {
      this.getAllNumbers();
    }, 15000);
  },
};
</script>