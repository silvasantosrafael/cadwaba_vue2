<template>
  <div>
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  components: { SideBar },
  name: "App",
};
</script>
