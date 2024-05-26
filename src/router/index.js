import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DocMasukView from "../views/DocMasukView.vue";
import DocKeluarView from "../views/DocKeluarView.vue";
import SuratOutView from "@/views/SuratOutView.vue";
import SuratInView from "@/views/SuratInView.vue";
import SuratInRahasiaView from "@/views/SuratInRahasiaView.vue";
import SuratOutRahasiaView from "@/views/SuratOutRahasiaView.vue";
import DaftarPejabatView from "@/views/DaftarPejabatView.vue";
import JenisSuratView from "@/views/JenisSuratView.vue";
import DocumentView from "@/views/DocumentView.vue";
import ProfilView from "@/views/ProfilView.vue";
import LoginMasukView from "@/views/LoginMasukView.vue"; // Perbaiki jalur impor ini

const routes = [
  {
    path: "/login-form",
    name: "login-form",
    component: LoginMasukView,
  },
  {
    path: "/profil",
    name: "profil",
    component: ProfilView,
  },
  {
    path: "/document",
    name: "document",
    component: DocumentView,
  },
  {
    path: "/jenis_surat",
    name: "jenis_surat",
    component: JenisSuratView,
  },
  {
    path: "/pejabat",
    name: "pejabat",
    component: DaftarPejabatView,
  },
  {
    path: "/surat_masuk",
    name: "surat_masuk",
    component: SuratInView,
  },
  {
    path: "/suratin_rahasia",
    name: "suratin_rahasia",
    component: SuratInRahasiaView,
  },
  {
    path: "/surat_keluar",
    name: "surat_keluar",
    component: SuratOutView,
  },
  {
    path: "/suratout_rahasia",
    name: "suratout_rahasia",
    component: SuratOutRahasiaView,
  },
  {
    path: "/doc_masuk",
    name: "doc_masuk",
    component: DocMasukView,
  },
  {
    path: "/doc_keluar",
    name: "doc_keluar",
    component: DocKeluarView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
