import Vue from 'vue'
import VueRouter from 'vue-router'
import EncryptionMain from '@/components/EncryptionMain'
import EncryptionResult from '@/components/EncryptionResult'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: EncryptionMain
  },
  {
    path: '/secret/:id',
    name: 'secret-result',
    component: EncryptionResult
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
