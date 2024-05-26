<template>
  <div class="profil"></div>
  <NavbarMain />
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="doc_masuk">
          <div class="image">
            <img src="../assets/profil.png" alt="profil" style="width: 200px" />
            <h2 class="admin">My ADMIN</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMain from "@/components/NavbarMain.vue";

export default {
  name: "ProfilView",
  components: {
    NavbarMain,
  },
};
</script>
<style scoped>
.doc_masuk {
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.admin {
  margin-left: 19px;
}
</style>
