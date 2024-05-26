<template>
  <div class="pejabat"></div>
  <NavbarMain />
  <div class="doc_masuk">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main">
            <div class="judul mt-4">
              <h4 class="text-center">DAFTAR PEJABAT</h4>
              <div class="search mt-5 d-flex justify-content-between">
                <div class="col-3 input">
                  <div class="input-group mb-3"></div>
                </div>
                <div class="add">
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">New Data</button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">DAFTAR PEJABAT</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form action="">
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="KDJAB..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="JABATAN..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="SATKER..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cencel</button>
                          <button type="button" class="btn btn-primary">Insert</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-2">
              <table class="table table-success table-striped">
                <tr>
                  <th>NO</th>
                  <th>KDJAB</th>
                  <th>JABATAN</th>
                  <th>SATKER</th>
                  <th>ACTION</th>
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
  name: "DaftarPejabatView",
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
