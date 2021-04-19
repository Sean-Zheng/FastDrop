<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button @click="click">通知</el-button>
    <file-drag id="box" />
  </div>
</template>

<script>
// @ is an alias to /src
import FileDrag from "@/components/FileDrag.vue";

export default {
  name: "Home",
  components: {
    FileDrag,
  },
  methods: {
    click() {
      // window.utools.showNotification("Hi, uTools");
      let ftp_client = new window.ftp("", "", "", "");
      ftp_client.connect();
    },
  },
};
</script>

<style scoped>
/* .home >>> .file-drag {
  width: 500px;
  height: 500px;
  background-color: brown;
} */
.file-drag {
  width: 500px;
  height: 500px;
  background-color: brown;
}
</style>
