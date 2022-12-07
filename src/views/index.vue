<template>
  <div class="container">
    <HeaderTop />
    <appProvider>
      <router-view v-slot="{ Component }">
        <transition :enter-active-class="'animated fadeIn'" :leave-active-class="'animated fadeOut'" mode="out-in">
          <component calss="inner_content" :is="Component" />
        </transition>
      </router-view>
    </appProvider>
  </div>
</template>
<script setup lang="ts">
  import { defHttp } from '/@/https';
  console.log('defHttp', defHttp.getAxios());
  defHttp.axiosInstance
    .post('https://blwm365.com/api/getPoolInfo')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
</script>
