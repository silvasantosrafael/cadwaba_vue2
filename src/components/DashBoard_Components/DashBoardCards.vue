<template>
  <div class="cardBox">
    <b-overlay :show="show" spinner-variant="primary" variant="transparent">
      <div class="cardBoxUnit">
        <div>
          <div class="numbers" id="tel">{{ totalNumbers }}</div>
          <div class="cardName">Total de números</div>
        </div>
        <div class="iconBox"><i class="bx bxs-bar-chart-alt-2"></i></div>
      </div>
    </b-overlay>

    <b-overlay :show="show" spinner-variant="primary" variant="transparent">
      <div class="cardBoxUnit">
        <div>
          <div class="numbers">{{ totalNumbersActive }}</div>
          <div class="cardName">Números ativos</div>
        </div>
        <div class="iconBox">
          <i class="bx bx-trending-up"></i>
        </div>
      </div>
    </b-overlay>
    <b-overlay :show="show" spinner-variant="primary" variant="transparent">
      <div class="cardBoxUnit">
        <div>
          <div class="numbers">{{ totalNumbersDeactived }}</div>
          <div class="cardName">Números desativados</div>
        </div>
        <div class="iconBox">
          <i class="bx bx-trending-down"></i>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: "DashBoardCards",
  props: {
    totalNumbers: Number,
    totalNumbersActive: Number,
    totalNumbersDeactived: Number,
    show: Boolean,
  },
};
</script>