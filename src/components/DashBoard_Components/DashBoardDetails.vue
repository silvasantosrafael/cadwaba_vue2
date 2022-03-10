<template>
  <div class="details">
    <div v-show="false" class="recent">
      <div class="cardHeader">
        <h3>Números Recentes</h3>
      </div>
      <!-- <DashBoardDetailsRecents :listAllNumbers="listAllNumbers" /> -->
    </div>

    <div v-show="true" class="recent">
      <div class="cardHeader">
        <h3>Todos os números</h3>
      </div>
      <DashBoardDetailsAll :listAllNumbers="listAllNumbers"/>
    </div>
    
    <div class="moreInfo">
      <div class="cardHeader">
        <h3>Mais Informações</h3>
      </div> 
      
    </div>
  
  </div>
</template>

<script>
import DashBoardDetailsAll from './DashBoardDetailsAll.vue';
// import DashBoardDetailsRecents from "./DashBoardDetailsRecents.vue";

export default {
  name: "DashBoardDetails",
  components: { DashBoardDetailsAll },
  props: {
    listAllNumbers: Array,
  },
};
</script>