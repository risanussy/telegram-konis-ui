<template>
  <div class="doc_masuk">
    <NavbarMain />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main">
            <div class="judul mt-4">
              <h6 class="text-center">DOCUMENT MASUK</h6>
              <div class="search mt-5 d-flex justify-content-between">
                <div class="col-3 input">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Kata Pencarian" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
                  </div>
                </div>
                <div class="add">
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">New Data</button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">DOCUMENT MASUK</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form action="">
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="Dari..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="Kepada..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="Klasifikasi..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="No Telegram..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="TWU..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="mb-3">
                              <label for="fileUpload" class="form-label">File Pdf</label>
                              <input class="form-control" type="file" id="fileUpload" accept=".jpg, .jpeg, .pdf" required />
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
            <div class="table-responsive">
              <table class="table table-success table-striped">
                <tr>
                  <th>NO</th>
                  <th>DARI</th>
                  <th>KEPADA</th>
                  <th>KLASIFIKASI</th>
                  <th>NO TELEGRAM</th>
                  <th>TWU</th>
                  <th>PERIHAL</th>
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
  name: "DocMasukView",
  components: {
    NavbarMain,
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-group {
  width: 100%;
}
.add {
  margin-left: auto;
}

.doc_masuk {
  margin-top: 40px;
}
</style>
