<template>
  <div class="mainPrincipal">
    <div class="topbar"></div>
    <h1 class="text text-center">Consulta</h1>
    
    <!-- Component Table with Pagination -->
    <TablePagination />
  </div>
</template>
<script>
import TablePagination from "../components/TablePagination.vue";
export default {
  name: "ConsultNumber",
  components: {
    TablePagination,
  },
};
</script>