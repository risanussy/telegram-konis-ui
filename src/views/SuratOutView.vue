<template>
  <div class="surat_keluar"></div>
  <NavbarMain />
  <div class="doc_masuk">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main">
            <div class="judul mt-4">
              <h6 class="text-center">DATA SURAT KELUAR</h6>
              <div class="search mt-5 d-flex justify-content-between">
                <div class="col-3 input">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Kata Pencarian" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
                  </div>
                </div>
                <div class="tombol d-flex">
                  <div class="add me-2">
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1">Lihat Detail</button>

                    <!-- First Modal -->
                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel1">Detail Surat</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="container mt-2">
                            <div class="row">
                              <div class="col-md-6">
                                <form action="">
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                </form>
                              </div>
                              <div class="col-md-6">
                                <form action="">
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                  <div class="mb-3">
                                    <input type="text" class="form-control" id="inputDisabled" placeholder="" aria-label="Disabled input" disabled />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-danger">Delate</button>
                            <button type="button" class="btn btn-success">Update</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Button to trigger second modal -->
                  <div class="add">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">New Data</button>

                    <!-- Second Modal -->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel2">DATA SURAT KELUAR</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="container mt-5">
                            <div class="modal-body">
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="No Agenda..." aria-label="No Agenda" />
                                  </div>
                                  <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Buku Agenda..." aria-label="Buku Agenda" />
                                  </div>
                                  <div class="input-group mb-3">
                                    <input type="date" class="form-control" placeholder="Tanggal Masuk..." aria-label="Tanggal Masuk" />
                                  </div>
                                  <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="No Surat..." aria-label="No Surat" />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Tanggal Surat..." aria-label="Tanggal Surat" />
                                  </div>
                                  <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Jenis Surat..." aria-label="Jenis Surat" />
                                  </div>
                                  <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Asal Surat..." aria-label="Asal Surat" />
                                  </div>
                                  <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Klasifikasi..." aria-label="Klasifikasi" />
                                  </div>
                                  <div class="input-group mb-3">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Perihal..."></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Insert</button>
                          </div>
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
                  <th>NO AGENDA</th>
                  <th>BUKU AGENDA</th>
                  <th>TGL MASUK</th>
                  <th>NO SURAT</th>
                  <th>TGL SURAT</th>
                  <th>JENIS SURAT</th>
                  <th>ASAL SURAT</th>
                  <th>KLASIFIKASI</th>
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
  name: "SuratOutView",
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
