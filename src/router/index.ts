import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
const routes = setupLayouts(generatedRoutes)

console.log('🦕 routes', routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
