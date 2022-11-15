<template>
  <div>
    <div class="homeView d-lg-flex">     
      <div class="admin_panal">
        <AdminInfo />
      </div>
      <div class="site_content w-100">
        <Header />
        <RouterView />
      </div>
    </div>
  </div>

  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '../src/components/Header.vue'
import AdminInfo from '../src/components/AdminInfo.vue'
</script>



