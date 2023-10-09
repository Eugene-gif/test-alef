import { createRouter, createWebHistory } from "vue-router";

import Form from "@/pages/Form.vue";
import Preview from "@/pages/Preview.vue";

const routes = [
  {
    path: '/',
    component: Form
  },
  {
    path: '/preview',
    component: Preview,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/test-alef')
})

export default router;