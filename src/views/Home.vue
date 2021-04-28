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
      // let ftp_client = new window.FtpClient();
      this.$ftp.connect({
        host: "172.31.233.39",
        port: 21,
        user: "zeno",
        password: "zxf0202",
      });
      this.$ftp.on("ready", () => {
        window.utools.showNotification("FTP服务器连接成功");

        this.$ftp.end();
      });
      this.$ftp.on("error", () => {
        window.utools.showNotification("FTP服务器连接失败");
      });
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
