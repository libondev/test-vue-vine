import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: generatedRoutes,
})

export default router
