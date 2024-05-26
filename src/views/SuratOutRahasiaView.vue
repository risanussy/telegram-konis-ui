<template>
  <div class="suratout_rahasia">
    <NavbarMain />
    <div class="doc_masuk">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="main">
              <div class="judul mt-4">
                <h6 class="text-center">ARSIP DATA SURAT KELUAR RAHASIA</h6>
                <div class="search mt-5 d-flex justify-content-between">
                  <div class="col-6 input">
                    <div class="tombol d-flex justify-content-center align-items-center">
                      <select class="form-select me-2" id="selectOption" aria-label="Select example">
                        <option selected>-Semua Jenis Surat-</option>
                        <option value="1" to="surat_masuk">Surat Perintah</option>
                        <option value="2" to="">Perintah Harian</option>
                        <option value="3" to="">Telegram</option>
                        <option value="4" to="">Surat Telegram</option>
                        <option value="4" to="">Surat Keputusan</option>
                        <option value="4" to="">Surat Intruksi</option>
                        <option value="4" to="">Surat Edaran</option>
                        <option value="4" to="">Surat Nota Dinas</option>
                        <option value="4" to="">Surat Laporan</option>
                      </select>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Kata Pencarian" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-responsive mt-2">
                <table class="table table-success table-striped">
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NO AGENDA</th>
                      <th>TGL MASUK</th>
                      <th>NO SURAT</th>
                      <th>TGL SURAT</th>
                      <th>KLASIFIKASI</th>
                      <th>JENIS SURAT</th>
                      <th>ASAL SURAT</th>
                      <th>PERIHAL</th>
                    </tr>
                  </thead>
                  <!-- <tbody>
                    <tr>
                      <td>1</td>
                      <td>001</td>
                      <td>2023-01-01</td>
                      <td>123/ABC/2023</td>
                      <td>2023-01-01</td>
                      <td>Klasifikasi 1</td>
                      <td>Jenis 1</td>
                      <td>Asal 1</td>
                      <td>Perihal 1</td>
                    </tr>
                  </tbody> -->
                </table>
              </div>
            </div>
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
  name: "SuratOutRahasiaView",
  components: {
    NavbarMain,
  },
};
</script>
<style scoped>
.doc_masuk {
  margin-top: 40px;
}
</style>
