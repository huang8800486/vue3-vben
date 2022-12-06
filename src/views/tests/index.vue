<template>
  <div class="container">
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
  // import { HeaderTop } from '/@/components/Application';
</script>
