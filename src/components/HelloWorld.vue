<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{ msg: string }>();

  const count = ref(0);
</script>

<template>
  <div
    class="border-b test-box capitalize bg-black w-auto text-base italic font-bold text-right w-100px h-100px relative z-10 scale-75 rotate-45"
  >
    <p class="ring-0 text-black p-10px mt-10px">abc</p>
    <svg class="fill-cyan-500 hover:fill-cyan-700">
      <!-- ... -->
    </svg>
  </div>
  <!-- <div class="test-box" w:sm="bg-red-400 text-light-100 p-10" w:md="bg-blue-700 p-50" w:lg="p-100 bg-cyan-800 text-50px"> 响应式 </div> -->
  <div class="btn-blue btn">button</div>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
