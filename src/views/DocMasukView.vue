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
                    <input v-model="searchTerm" type="text" class="form-control" placeholder="Kata Pencarian" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchDocuments">Cari</button>
                  </div>
                </div>
                <div class="add">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">New Data</button>

                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">DOCUMENT MASUK</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="addDocument">
                            <div class="input-group mb-3">
                              <input v-model="newDocument.dari" type="text" class="form-control" placeholder="Dari..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input v-model="newDocument.kepada" type="text" class="form-control" placeholder="Kepada..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input v-model="newDocument.klasifikasi" type="text" class="form-control" placeholder="Klasifikasi..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input v-model="newDocument.no_telegram" type="text" class="form-control" placeholder="No Telegram..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input v-model="newDocument.twu" type="text" class="form-control" placeholder="TWU..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="input-group mb-3">
                              <input v-model="newDocument.perihal" type="text" class="form-control" placeholder="Perihal..." aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div class="mb-3">
                              <label for="fileUpload" class="form-label">File Pdf</label>
                              <input class="form-control" type="file" id="fileUpload" @change="handleFileUpload" accept=".jpg, .jpeg, .pdf" required />
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
            <div class="table-responsive">
              <table class="table table-success table-striped">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>DARI</th>
                    <th>KEPADA</th>
                    <th>KLASIFIKASI</th>
                    <th>NO TELEGRAM</th>
                    <th>TWU</th>
                    <th>PERIHAL</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(document, index) in documents" :key="document.id">
                    <td v-if="document.status == 1">{{ index + 1 }}</td>
                    <td v-if="document.status == 1">{{ document.dari }}</td>
                    <td v-if="document.status == 1">{{ document.kepada }}</td>
                    <td v-if="document.status == 1">{{ document.klasifikasi }}</td>
                    <td v-if="document.status == 1">{{ document.no_telegram }}</td>
                    <td v-if="document.status == 1">{{ document.twu }}</td>
                    <td v-if="document.status == 1">{{ document.perihal }}</td>
                    <td v-if="document.status == 1">
                      <button class="btn btn-secondary" @click="arsipDocument(document.id)">Arsip</button>
                      <button class="btn btn-primary" @click="viewPdf(document.file_path)">View PDF</button>
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
</template>
<script>
import axios from 'axios';
// @ is an alias to /src
import NavbarMain from "@/components/NavbarMain.vue";

export default {
  name: "DocMasukView",
  components: {
    NavbarMain,
  },
  data() {
    return {
      documents: [],
      searchTerm: '',
      newDocument: {
        dari: '',
        kepada: '',
        klasifikasi: '',
        no_telegram: '',
        twu: '',
        status: '1',
        perihal: '',
        file: null
      }
    };
  },
  methods: {
    fetchDocuments() {
      axios.get('http://localhost:8000/api/documents')
        .then(response => {
          this.documents = response.data;
        })
        .catch(error => {
          console.error("Ada masalah saat mengambil data dokumen:", error);
        });
    },
    addDocument() {
      const formData = new FormData();
      formData.append('dari', this.newDocument.dari);
      formData.append('kepada', this.newDocument.kepada);
      formData.append('klasifikasi', this.newDocument.klasifikasi);
      formData.append('no_telegram', this.newDocument.no_telegram);
      formData.append('twu', this.newDocument.twu);
      formData.append('status', this.newDocument.status);
      formData.append('perihal', this.newDocument.perihal);
      formData.append('file', this.newDocument.file);

      console.log(this.newDocument.file)

      axios.post('http://localhost:8000/api/documents', formData)
        .then(response => {
          this.documents.push(response.data);
          // Reset form data
          this.newDocument = {
            dari: '',
            kepada: '',
            klasifikasi: '',
            no_telegram: '',
            twu: '',
            status: '1',
            perihal: '',
            file: null
          };
        })
        .catch(error => {
          console.error("Ada masalah saat menambahkan dokumen:", error);
        });
    },
    handleFileUpload(event) {
      this.newDocument.file = event.target.files[0];
    },
    searchDocuments() {
      console.log("Searching for:", this.searchTerm);
    },
    arsipDocument(documentId) {
      axios.put(`http://localhost:8000/api/documents/${documentId}`, { status: 3 })
        .then(() => {
          const index = this.documents.findIndex(doc => doc.id === documentId);
          if (index !== -1) {
            this.documents[index].status = 3;
          }
        })
        .catch(error => {
          console.error("Ada masalah saat mengarsipkan dokumen:", error);
        });
    },
    viewPdf(filePath) {
  window.open(`http://localhost:8000/storage/${filePath}`, '_blank');
    }
  },
  created() {
    this.fetchDocuments();
  }
};
</script>
