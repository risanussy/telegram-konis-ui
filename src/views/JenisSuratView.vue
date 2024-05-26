<template>
  <div class="jenis_surat"></div>
  <NavbarMain />
  <div class="doc_masuk">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main">
            <div class="judul mt-4">
              <h4 class="text-center">JENIS SURAT</h4>
              <div class="search mt-5 d-flex justify-content-between">
                <div class="col-3 input">
                  <div class="input-group mb-2"></div>
                </div>
              </div>
            </div>
            <div class="table-responsives">
              <table class="table table-success table-striped">
                <tr>
                  <th style="width: 50px">NO</th>
                  <th>NM_TULDIS</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>SURAT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SURAT PERINTAH</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>PERINTAH HARIAN</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>TELEGRAM</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>SURAT TELEGRAM</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>SURAT KEPUTUSAN</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>INTRUKSI</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>SURAT EDARAN</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>NOTA DINAS</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>LAPORAN</td>
                </tr>
              </table>
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
  name: "JenisSuratView",
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
