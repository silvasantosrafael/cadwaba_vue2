<template>
  <div class="details">
    <div v-if="showCardAllNumbers" class="recent">
      <div class="cardHeader">
        <h3>Números Recentes</h3>
      </div>
      <DashBoardDetailsRecents :listAllNumbers="listAllNumbers" />
    </div>

    <div v-else class="recent">
      <div class="cardHeader">
        <h3>Todos os números</h3>
      </div>
      <DashBoardDetailsAll :listAllNumbers="listAllNumbers"/>
    </div>

  </div>
</template>

<script>
import DashBoardDetailsAll from './DashBoardDetailsAll.vue';
import DashBoardDetailsRecents from "./DashBoardDetailsRecents.vue";

export default {
  name: "DashBoardDetails",
  components: { DashBoardDetailsRecents, DashBoardDetailsAll },
  props: {
    listAllNumbers: Array,
    showCardAllNumbers: Boolean,
  },
};
</script>