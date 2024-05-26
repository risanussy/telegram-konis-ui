<template>
  <div class="navbar"></div>
  <nav class="navbar navbar-dark navbar-expand-lg bg-primary fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-Link class="nav-link" to="doc_masuk">Document Masuk</router-Link>
          </li>
          <li class="nav-item">
            <router-Link class="nav-link" to="doc_keluar">Document Keluar</router-Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"> Arsip </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-Link class="dropdown-item" to="/surat_masuk">Surat Masuk</router-Link></li>
              <li><router-Link class="dropdown-item" to="/suratin_rahasia">Surat Masuk Rahasia</router-Link></li>
              <li><router-Link class="dropdown-item" to="/surat_keluar">Surat Keluar</router-Link></li>
              <li><router-Link class="dropdown-item" to="/suratout_rahasia">Surat keluar Rahasia</router-Link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"> Pendukung </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-Link class="dropdown-item" to="/pejabat">Daftar Pejabat</router-Link></li>
              <li><router-Link class="dropdown-item" to="/jenis_surat">Jenis Surat</router-Link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-Link class="nav-link" to="document">Document</router-Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"> Report </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal_1">Surat Masuk</button>
              <button type="button" class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal_2">Surat Keluar</button>
            </ul>
          </li>
          <li class="nav-item">
            <router-Link class="nav-link" to="login-form">LogOut</router-Link>
          </li>
          <li class="nav-item">
            <router-Link class="nav-link" to="profil">Profil</router-Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Modal 1 -->
  <!-- Modal -->
  <div class="modal fade" id="exampleModal_1" tabindex="-1" aria-labelledby="exampleModalLabel_1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel_1">CETAK REPORT SURAT MASUK</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container_log">
            <div class="row">
              <div class="col-md-6">
                <p>Berdasarkan Jenis Surat</p>
                <form action="">
                  <div class="input-group mb-1">
                    <select class="form-select" id="selectOption1" aria-label="Select example">
                      <option selected>-Semua Surat-</option>
                      <option value="1" to="surat_masuk">Surat Perintah</option>
                      <option value="2" to="">Perintah Harian</option>
                      <option value="3" to="">Telegram</option>
                      <option value="4" to="">Surat Telegram</option>
                      <option value="5" to="">Surat Keputusan</option>
                      <option value="6" to="">Surat Intruksi</option>
                      <option value="7" to="">Surat Edaran</option>
                      <option value="8" to="">Surat Nota Dinas</option>
                      <option value="9" to="">Surat Laporan</option>
                    </select>
                  </div>
                  <div class="input-group mb-1">
                    <select class="form-select" id="selectOption2" aria-label="Select example">
                      <option selected>-Surat B Dan R</option>
                      <option value="1">Surat Masuk Biasa</option>
                      <option value="2">Surat Masuk Rahasia</option>
                      <option value="3">Surat Keluar Biasa</option>
                      <option value="4">Surat Keluar Rahasia</option>
                    </select>
                  </div>
                  <div class="mb-1">
                    <label for="inputDate">Tanggal</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Masukan Tanggal" required aria-label="Input Date" />
                  </div>
                  <div class="mb-1">
                    <label for="inputDate">SD Tanggal</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Masukan Tanggal" required aria-label="Input Date" />
                  </div>
                </form>
              </div>
              <!-- Berdasarkan Buku Agenda -->
              <div class="col-md-6">
                <p>Berdasarkan Buku Agenda</p>
                <form action="">
                  <div class="input-group mb-1">
                    <select class="form-select" id="selectOption2" aria-label="Select example">
                      <option selected>-Semua-</option>
                      <option value="1" to="surat_masuk">Surat Perintah</option>
                      <option value="2" to="">Perintah Harian</option>
                      <option value="3" to="">Telegram</option>
                      <option value="4" to="">Surat Telegram</option>
                      <option value="5" to="">Surat Keputusan</option>
                      <option value="6" to="">Surat Intruksi</option>
                      <option value="7" to="">Surat Edaran</option>
                      <option value="8" to="">Surat Nota Dinas</option>
                      <option value="9" to="">Surat Laporan</option>
                    </select>
                  </div>
                  <div class="mb-1">
                    <label for="inputDate">Tanggal</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Masukan Tanggal" required aria-label="Input Date" />
                  </div>
                  <div class="mb-1">
                    <label for="inputDate">SD Tanggal</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Masukan Tanggal" required aria-label="Input Date" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cetak PDF</button>
          <button type="button" class="btn btn-primary">Cetak Word</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Akhir Modal -->
  <!-- Modal 2 -->
  <div class="modal fade" id="exampleModal_2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">CETAK REPORT SURAT KELUAR</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container_log">
            <div class="row">
              <div class="col-md-6">
                <p>Berdasarkan Jenis Surat</p>
                <form action="">
                  <div class="input-group mb-1">
                    <select class="form-select" id="selectOption1" aria-label="Select example">
                      <option selected>-Semua Surat-</option>
                      <option value="1" to="surat_masuk">Surat Perintah</option>
                      <option value="2" to="">Perintah Harian</option>
                      <option value="3" to="">Telegram</option>
                      <option value="4" to="">Surat Telegram</option>
                      <option value="5" to="">Surat Keputusan</option>
                      <option value="6" to="">Surat Intruksi</option>
                      <option value="7" to="">Surat Edaran</option>
                      <option value="8" to="">Surat Nota Dinas</option>
                      <option value="9" to="">Surat Laporan</option>
                    </select>
                  </div>
                  <div class="input-group mb-1">
                    <select class="form-select" id="selectOption2" aria-label="Select example">
                      <option selected>-Surat B Dan R</option>
                      <option value="1">Surat Masuk Biasa</option>
                      <option value="2">Surat Masuk Rahasia</option>
                      <option value="3">Surat Keluar Biasa</option>
                      <option value="4">Surat Keluar Rahasia</option>
                    </select>
                  </div>
                  <div class="mb-1">
                    <label for="inputDate">Tanggal</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Masukan Tanggal" aria-label="Input Date" />
                  </div>
                  <div class="mb-1">
                    <label for="inputDate">SD Tanggal</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Masukan Tanggal" aria-label="Input Date" />
                  </div>
                </form>
              </div>
              <!-- Berdasarkan Buku Agenda -->
              <div class="col-md-6">
                <p>Berdasarkan Buku Agenda</p>
                <form action="">
                  <div class="input-group mb-1">
                    <select class="form-select" id="selectOption2" aria-label="Select example">
                      <option selected>-Semua-</option>
                      <option value="1" to="surat_masuk">Surat Perintah</option>
                      <option value="2" to="">Perintah Harian</option>
                      <option value="3" to="">Telegram</option>
                      <option value="4" to="">Surat Telegram</option>
                      <option value="5" to="">Surat Keputusan</option>
                      <option value="6" to="">Surat Intruksi</option>
                      <option value="7" to="">Surat Edaran</option>
                      <option value="8" to="">Surat Nota Dinas</option>
                      <option value="9" to="">Surat Laporan</option>
                      >
                    </select>
                  </div>
                  <div class="mb-1">
                    <label for="inputDate">Tanggal</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Masukan Tanggal" aria-label="Input Date" />
                  </div>
                  <div class="mb-1">
                    <label for="inputDate">SD Tanggal</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Masukan Tanggal" aria-label="Input Date" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cetak PDF</button>
          <button type="button" class="btn btn-primary">Cetak Word</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Akhir Modal -->
</template>
<style scoped>
.navbar {
  margin: 0;
  padding: 0;
}
nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  name: "NavbarMain",
  props: {},
};
</script>
