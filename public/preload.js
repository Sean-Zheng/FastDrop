// const fs = require("fs");

const sftp = require("ssh2-sftp-client");

// window.FtpClient = FtpClient;

let sftp_client = new sftp();

sftp_client
  .connect({
    host: "172.31.234.18",
    port: 22,
    username: "zeno",
    password: "zxf0202",
  })
  .then(() => {
    console.log("连接成功");
  })
  .catch((err) => {
    console.log("连接失败");
    console.log(err);
  });
