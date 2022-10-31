<script setup lang="ts">
const doSomething = (e) => {
  console.log(e.detail);
};
</script>

<template>
  <div class="relative">
    <div v-dragscroll class="overflow-scroll w-[800px] h-[800px]">
      <img
        src="https://images.pexels.com/photos/13377187/pexels-photo-13377187.jpeg"
        class="object-none object-cover w-full h-full cursor-move"
      />
    </div>
  </div>
</template>
