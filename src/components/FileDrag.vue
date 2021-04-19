<template>
  <div
    class="file-drag"
    @drop.prevent="drop"
    @dragenter.prevent
    @dragleave.prevent
    @dragover.prevent
  ></div>
</template>

<script>
export default {
  methods: {
    drop(event) {
      const data = event.dataTransfer.files[0];
      /*file对象
      name: "logo.png"
      path: "C:\Users\Zeno\Desktop\fastdrop\dist\logo.png"
      size: 571623
      文件夹对象
      name: "img"
      path: "C:\Users\Zeno\Desktop\fastdrop\dist\img"
      size: 0
       */
      console.log(data);
    },
  },
};
</script>

<style scoped>
/* #box {
  width: 300px;
  height: 300px;
  background-color: aqua;
} */
</style>
