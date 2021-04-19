// const fs = require("fs");
const FtpClient = require("ftp");
class Ftp {
  constructor(host, port, user, password, path = "/") {
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
    this.path = path;
    this.client = new FtpClient();
    this.client.on("error", () => {
      window.utools.showNotification("ftp");
      // new Notification("fastdrop", {
      //   body: "ftp连接失败",
      // });
    });
    this.client.on("ready", () => {
      new Notification("fastdrop", {
        body: "ftp连接成功",
      });
    });
  }
  connect() {
    this.client.connect({
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
    });
  }
  end() {
    this.client.end();
  }
}

window.ftp = Ftp;
