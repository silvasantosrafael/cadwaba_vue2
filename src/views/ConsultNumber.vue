<template>
  <div class="mainPrincipal">
    <div class="topbar"></div>
    <h1 class="text text-center">Consulta</h1>
    <div>
      <Pagination />
    </div>
  </div>
</template>
<script>
import Pagination from "../components/Pagination.vue";
export default {
  name: "ConsultNumber",
  components: {
    Pagination,
  },
};
</script>