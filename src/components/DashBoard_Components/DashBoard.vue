<template>
  <div class="mainPrincipal">
    <div class="topbar"></div>

    <!-- Component Cards -->
    <DashBoardCards
      :totalNumbers="totalNumbers"
      :totalNumbersActive="totalNumbersActive"
      :totalNumbersDeactived="totalNumbersDeactived"
    />

    <!-- Component Datails -->
    <DashBoardDetails
      :listAllNumbers="listAllNumbers"
    />
  </div>
</template>

<script>
import numbersRequests from '@/services/numbersRequests';
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
    };
  },
  mounted() {
    // Request all data from API
    numbersRequests.getAllNumbers().then((response) => {
      let dataResponse = response.data;
      let listActive = [];
      let listDeactive = [];

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
    });

    // Update data for the Components
    setInterval(() => {
      numbersRequests.getAllNumbers().then((response) => {
        let dataResponse = response.data;
        let listActive = [];
        let listDeactive = [];

        this.listAllNumbers = dataResponse.reverse();
        this.totalNumbers = dataResponse.length;
        this.totalNumbersActive = listActive.length;
        this.totalNumbersDeactived = listDeactive.length;

        for (let index = 0; index < dataResponse.length; index++) {
          if (dataResponse[index].Ativo == 1) {
            listActive.push(dataResponse[index]);
            this.totalNumbersActive = listActive.length;
          } else if (dataResponse[index].Ativo == 0) {
            listDeactive.push(dataResponse[index]);
            this.totalNumbersDeactived = listDeactive.length;
          }
        }
      });
    }, 15000);
  },
};
</script>