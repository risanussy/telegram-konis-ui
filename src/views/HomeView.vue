<template>
  <div class="home"></div>
  <NavbarMain />
</template>

<script>
// @ is an alias to /src
import NavbarMain from "@/components/NavbarMain.vue";

export default {
  name: "HomeView",
  components: {
    NavbarMain,
  },
};
</script>
