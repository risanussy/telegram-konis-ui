<template>
  <div class="containe">
    <div class="login-form">
      <form @submit.prevent="handleLogin">
        <h3 class="mb-4">Login</h3>
        <div class="mb-3">
          <label for="nama" class="form-label">Masukan Nama</label>
          <input type="text" class="form-control" id="nama" v-model="nama" required />
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
import axios from 'axios';

export default {
  name: "LoginMasukView",
  data() {
    return {
      nama: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.get(`http://localhost:8000/api/users/${this.nama}`);
        if (response.data.password === this.password) {
          this.$router.push('/doc_masuk');
        } else {
          alert("Password salah!");
        }
      } catch (error) {
        alert("Nama salah!");
      }
    },
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
