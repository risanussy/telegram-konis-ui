<template>
  <div class="containe">
    <div class="login-form">
      <form>
        <h3 class="mb-4">Login</h3>
        <div class="mb-3">
          <label for="text" class="form-label">Masukan Username</label>
          <input type="text" class="form-control" id="text" v-model="email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required />
        </div>
        <button class="btn btn-primary mb-2" type="submit">Kirim</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginMasukView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
/* Gaya khusus untuk komponen login */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.containe {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/cbg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.login-form {
  width: 400px;
  padding: 10px 20px;
  margin: auto;
  box-shadow: 5px 7px 10px rgb(187, 186, 186);
  border-radius: 10px;
  background-color: white;
}
</style>
