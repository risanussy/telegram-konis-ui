<template>
  <div class="surat_masuk">
    <NavbarMain />
    <div class="doc_masuk">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="main">
              <div class="judul mt-4">
                <h6 class="text-center">DATA SURAT MASUK</h6>
                <div class="search mt-5 d-flex justify-content-between">
                  <div class="col-3 input">
                    <div class="input-group mb-3">
                      <input type="text" v-model="searchTerm" class="form-control" placeholder="Kata Pencarian" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchDocuments">Cari</button>
                    </div>
                  </div>
                  <div class="tombol d-flex">
                    <div class="add me-2">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">New Data</button>
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">DATA SURAT MASUK</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form @submit.prevent="addDocument">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="input-group mb-3">
                                      <input v-model="newDocument.no_agenda" type="text" class="form-control" placeholder="No Agenda..." aria-label="No Agenda" required />
                                    </div>
                                    <div class="input-group mb-3">
                                      <input v-model="newDocument.buku_agenda" type="text" class="form-control" placeholder="Buku Agenda..." aria-label="Buku Agenda" required />
                                    </div>
                                    <div class="input-group mb-3">
                                      <input v-model="newDocument.created_at" type="date" class="form-control" placeholder="Tanggal Masuk..." aria-label="Tanggal Masuk" required />
                                    </div>
                                    <div class="input-group mb-3">
                                      <input v-model="newDocument.no_telegram" type="text" class="form-control" placeholder="No Surat..." aria-label="No Surat" required />
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="input-group mb-3">
                                      <input v-model="newDocument.twu" type="date" class="form-control" placeholder="Tanggal Surat..." aria-label="Tanggal Surat" required />
                                    </div>
                                    <div class="input-group mb-3">
                                      <input v-model="newDocument.jenis_surat" type="text" class="form-control" placeholder="Jenis Surat..." aria-label="Jenis Surat" required />
                                    </div>
                                    <div class="input-group mb-3">
                                      <input v-model="newDocument.dari" type="text" class="form-control" placeholder="Asal Surat..." aria-label="Asal Surat" required />
                                    </div>
                                    <div class="input-group mb-3">
                                      <input v-model="newDocument.klasifikasi" type="text" class="form-control" placeholder="Klasifikasi..." aria-label="Klasifikasi" required />
                                    </div>
                                    <div class="input-group mb-3">
                                      <textarea v-model="newDocument.perihal" class="form-control" rows="3" placeholder="Perihal..." required></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                  <button type="submit" class="btn btn-primary">Insert</button>
                                </div>
                              </form>
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
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NO AGENDA</th>
                      <th>BUKU AGENDA</th>
                      <th>TGL MASUK</th>
                      <th>NO SURAT</th>
                      <th>TWU</th>
                      <th>JENIS SURAT</th>
                      <th>ASAL SURAT</th>
                      <th>KLASIFIKASI</th>
                      <th>PERIHAL</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(document, index) in filteredDocuments" :key="document.id">
                      <td v-if="document.status == 3">{{ index + 1 }}</td>
                      <td v-if="document.status == 3">agenda-{{ index + 1  }}</td>
                      <td v-if="document.status == 3">{{ document.buku_agenda!=null?document.buku_agenda:"-" }}</td>
                      <td v-if="document.status == 3">{{ formatDate(document.created_at) }}</td>
                      <td v-if="document.status == 3">{{ document.no_telegram }}</td>
                      <td v-if="document.status == 3">{{ document.twu }}</td>
                      <td v-if="document.status == 3">{{ document.jenis_surat }}</td>
                      <td v-if="document.status == 3">{{ document.dari }}</td>
                      <td v-if="document.status == 3">{{ document.klasifikasi }}</td>
                      <td v-if="document.status == 3">{{ document.perihal }}</td>
                      <td v-if="document.status == 3">
                        <button class="btn btn-success" data-bs-toggle="modal" :data-bs-target="'#detailModal' + document.id">Detail</button>
                        <!-- Detail Modal -->
                        <div class="modal fade" :id="'detailModal' + document.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Detail Surat</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <div class="row">
                                  <div class="col-md-6">
                                    <form>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" :value="document.no_agenda" disabled />
                                      </div>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" :value="document.buku_agenda" disabled />
                                      </div>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" :value="formatDate(document.created_at)" disabled />
                                      </div>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" :value="document.no_telegram" disabled />
                                      </div>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" :value="formatDate(document.twu)" disabled />
                                      </div>
                                    </form>
                                  </div>
                                  <div class="col-md-6">
                                    <form>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" :value="document.jenis_surat" disabled />
                                      </div>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" :value="document.dari" disabled />
                                      </div>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" :value="document.klasifikasi" disabled />
                                      </div>
                                      <div class="mb-3">
                                        <textarea class="form-control" rows="3" :value="document.perihal" disabled></textarea>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger" @click="deleteDocument(document.id)">Delete</button>
                                <button type="button" class="btn btn-success" @click="updateDocument(document.id)">Update</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
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
import axios from 'axios';
import NavbarMain from "@/components/NavbarMain.vue";
import { format } from 'date-fns';

export default {
  name: "SuratInView",
  components: {
    NavbarMain,
  },
  data() {
    return {
      documents: [],
      searchTerm: '',
      newDocument: {
        no_agenda: '',
        buku_agenda: '',
        created_at: '',
        no_telegram: '',
        twu: '',
        jenis_surat: '',
        dari: '',
        klasifikasi: '',
        perihal: '',
      },
    };
  },
  computed: {
    filteredDocuments() {
      return this.documents.filter(document => {
        return Object.values(document).some(val => String(val).toLowerCase().includes(this.searchTerm.toLowerCase()));
      });
    },
  },
  methods: {
    fetchDocuments() {
      axios.get('http://localhost:8000/api/documents')
        .then(response => {
          this.documents = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the documents!", error);
        });
    },
    addDocument() {
      axios.post('http://localhost:8000/api/documents', this.newDocument)
        .then(() => {
          this.fetchDocuments();
          this.newDocument = {
            no_agenda: '',
            buku_agenda: '',
            created_at: '',
            no_surat: '',
            twu: '',
            jenis_surat: '',
            dari: '',
            klasifikasi: '',
            perihal: '',
          };
        })
        .catch(error => {
          console.error("There was an error adding the document!", error);
        });
    },
    deleteDocument(id) {
      axios.delete(`http://localhost:8000/api/documents/${id}`)
        .then(() => {
          this.fetchDocuments();
        })
        .catch(error => {
          console.error("There was an error deleting the document!", error);
        });
    },
    updateDocument(id) {
      const updatedDocument = this.documents.find(document => document.id === id);
      axios.put(`http://localhost:8000/api/documents/${id}`, updatedDocument)
        .then(() => {
          this.fetchDocuments();
        })
        .catch(error => {
          console.error("There was an error updating the document!", error);
        });
    },
    searchDocuments() {
      this.fetchDocuments();  // This can be adjusted to apply the search logic in a more sophisticated manner if needed.
    },
    formatDate(dateString) {
      return format(new Date(dateString), 'dd-MM-yyyy');
    },
  },
  mounted() {
    this.fetchDocuments();
  },
};
</script>

<style scoped>
.table-responsive {
  margin-top: 20px;
}
</style>
