<template>
<el-container>
  <el-main>
	  <div id="reust" :class="{hold:ishold}">
		  <img :src = "zbase64[0]" id="zpy" >
      <img src="./imaaa.png" id="resut">
	  </div>
    <div id="bertishi" :class="{hold:tishi}">
      <el-button @click="yincang">我知道了</el-button>
    </div>
	   <div id="sss" ref="container" :style="{width: lastwidth+'px',height: lastheight+'px'}">
	   <vueCropper
  ref="cropper"
  :img="option.img"
  :full="option.full"
  :outputSize="option.size"
  :outputType="option.outputType"
  :autoCrop="true"
  :autoCropWidth="maxWidth"
  :autoCropHeight="maxHeight"
  :fixedBox = "true"
  :fixedNumber = "fixedNumber"
  id="cropper"
  :info="false"
  @realTime="realTime"
></vueCropper>
<img :src="option.bg" :style="{width: lastwidth+'px',height: lastheight+'px',}" id = "imgbg">
</div>

</el-main>

  <el-footer>
 
      <el-alert
    title="把图片放大缩写并移到合适位置"
    type="success">
  </el-alert>
	  <el-row :gutter="20" id="imgbarr">
  <el-col :span="6"  ><div><img src="./bg1.png" class="showbar"  @click="changBG(1)"></div></el-col>
  <el-col :span="6"  ><div><img src="./bg2.png" class="showbar"  @click="changBG(2)"> </div></el-col>
  <el-col :span="6"  ><div><img src="./bg3.png" class="showbar"  @click="changBG(3)"> </div></el-col>
  <el-col :span="6"  ><div><img src="./bg4.png" class="showbar"  @click="changBG(4)"></div></el-col>
</el-row>

	  <el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="6">  <label class="el-button" for="uploads">选择图片</label>
	<input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
	 accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg"></el-col>
  <el-col :span="6"><el-button  @click="finish()">生成海报</el-button></el-col>
</el-row>
	</el-footer>
</el-container>
</template>
<script>
import vueCropper from "vue-cropper";
export default {
  data: function() {
    return {
      type: 1,
      ishold: true,
      c: [],
      zbase64: [],
      previews: {},
      lastwidth: 100,
      lastheight: 200,
      fullwidth: 100,
      maxWidth: 30000,
      maxHeight: 30000,
      fixedNumber: [6, 9],
      tishi: false,
      option: {
        size: 1,
        outputType: "jpg",
        img: require("./img.jpg"),
        bg: require("./bg1.png")
      }
    };
  },
  methods: {
    yincang(){
      this.tishi = true;
    },
    changeImg() {
      this.option.img = this.lists[~~(Math.random() * this.lists.length)].img;
    },
    startCrop() {
      // start
      this.crap = true;
      this.$refs.cropper.startCrop();
    },
    stopCrop() {
      //  stop
      this.crap = false;
      this.$refs.cropper.stopCrop();
    },
    clearCrop() {
      // clear
      this.$refs.cropper.clearCrop();
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data;
    },
    changBG(type) {
      this.type = type;
      console.log(type);
      switch (type) {
        case 1:
          this.option.bg = require("./bg1.png");
          break;
        case 2:
          this.option.bg = require("./bg2.png");
          break;
        case 3:
          this.option.bg = require("./bg3.png");
          break;
        case 4:
          this.option.bg = require("./bg4.png");
          break;
      }
      console.log(this.type);
    },
    finish() {
      // 输出
      this.ishold = false;
      var sdsssd = [];
      this.$refs.cropper.getCropBlob(data => {
        var c = document.createElement("canvas");
        var ctx = c.getContext("2d");
        c.width = this.lastwidth;
        c.height = this.lastheight;
        ctx.rect(0, 0, c.width, c.height);
        console.log("创建canvas");
        ctx.fillStyle = "#fff";
        ctx.fill();
        console.log("进入绘制");
        var img = new Image();
        img.src = window.URL.createObjectURL(data);
        var imgsrc = this.option.bg;
        var type = this.type;
        switch (type) {
          case 1:
            img.onload = function() {
              console.log("绘制内容");
              ctx.drawImage(img, 0, 0, c.width, c.height);
              var img2 = new Image();
              img2.src = require("./bg1.png");
              img2.onload = function() {
                console.log("绘制背景");
                ctx.drawImage(img2, 0, 0, c.width, c.height);
                console.log("填充数组");
                sdsssd.push(c.toDataURL("image/png", 0.8));
                console.log(sdsssd[0]);
                document.getElementById("zpy").src = sdsssd[0];
              };
            };
            break;
          case 2:
            img.onload = function() {
              console.log("绘制内容");
              ctx.drawImage(img, 0, 0, c.width, c.height);
              var img2 = new Image();
              img2.src = require("./bg2.png");
              img2.onload = function() {
                console.log("绘制背景");
                ctx.drawImage(img2, 0, 0, c.width, c.height);
                console.log("填充数组");
                sdsssd.push(c.toDataURL("image/png", 0.8));
                console.log(sdsssd[0]);
                document.getElementById("zpy").src = sdsssd[0];
              };
            };
            break;
          case 3:
            img.onload = function() {
              console.log("绘制内容");
              ctx.drawImage(img, 0, 0, c.width, c.height);
              var img2 = new Image();
              img2.src = require("./bg3.png");
              img2.onload = function() {
                console.log("绘制背景");
                ctx.drawImage(img2, 0, 0, c.width, c.height);
                console.log("填充数组");
                sdsssd.push(c.toDataURL("image/png", 0.8));
                console.log(sdsssd[0]);
                document.getElementById("zpy").src = sdsssd[0];
              };
            };
            break;
          case 4:
            img.onload = function() {
              console.log("绘制内容");
              ctx.drawImage(img, 0, 0, c.width, c.height);
              var img2 = new Image();
              img2.src = require("./bg4.png");
              img2.onload = function() {
                console.log("绘制背景");
                ctx.drawImage(img2, 0, 0, c.width, c.height);
                console.log("填充数组");
                sdsssd.push(c.toDataURL("image/png", 0.8));
                console.log(sdsssd[0]);
                document.getElementById("zpy").src = sdsssd[0];
              };
            };
            break;
        }
      });
    },

    down(type) {
      // event.preventDefault()
      var aLink = document.createElement("a");
      aLink.download = "demo";
      // 输出
      if (type === "blob") {
        this.$refs.cropper.getCropBlob(data => {
          this.downImg = data;
          aLink.href = data;
          aLink.click();
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          this.downImg = data;
          aLink.href = data;
          aLink.click();
        });
      }
    },
    uploadImg(e, num) {
      //上传图片
      // this.option.img
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        num = 1;
        // console.log(num)
        if (num === 1) {
          this.option.img = data;
          console.log(data);
        } else if (num === 2) {
          this.example2.img = data;
        }
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    }
  },
  components: {
    vueCropper
  },
  created() {
    var fullwidth = document.body.clientWidth;
    this.lastwidth = fullwidth * 0.8;
    this.lastheight = this.lastwidth / 6 * 9;
    console.log(this.lastwidth, this.lastheight);

    var config = {
      debug: "", // 开启调试模式
      appId: "", // 必填，公众号的唯一标识
      timestamp: "", // 必填，生成签名的时间戳
      nonceStr: "", // 必填，生成签名的随机串
      signature: "", // 必填，签名，见附录1
      jsApiList: [

      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    };
   this.$axios({
      method: "post",
      url: "/wechat/api/wechat/jssdk_config",
      data: {
        url: window.location.href
      }
    })
      .then(function(response) {
        var json = JSON.parse(response.result);
        config.debug = json.debug;
        config.appId = json.appId;
        config.timestamp = json.timestamp;
        config.nonceStr = json.nonceStr;
        config.signature = json.signature;
        config.jsApiList = json.jsApiList;
      })
      .catch(function(error) {
        console.log(error);
      });
    wx.config(config);
    wx.ready(function() {
      //分享接口
      wx.onMenuShareTimeline({
        title: "这里是分享标题", // 分享标题
        link: window.location.href, // 分享链接
        imgUrl: "分享图标地址.没有,先这么放着吧", // 分享图标
        success: function() {
          // 用户确认分享后执行的回调函数
          alert("分享成功");
        },
        cancel: function() {
          // 用户取消分享后执行的回调函数
          alert("不分享拉倒");
        }
      }),
        wx.getLocalImgData({
           // 图片的localID
          success: function(res) {
            this.option.img = res.localData; // localData是图片的base64数据，可以用img标签显示
            console.log(this.option.img)
          }
        });
    });
    wx.error(function(res) {
      console.log("error:" + res);
    });
    wx.getLocalImgData();
  }
};
</script>
<style scoped>
#imgbarr {
  margin: 5px 0px;
}
.showbar {
  width: 70%;
}
.hold {
  display: none;
}
#reust {
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 110%;
  z-index: 13;
}
.el-main {
  padding: 0;
}
.btn {
  width: 100%;
  height: 100%;
  display: block;
}
#sss {
  display: block;
  background: #a0c;
  text-align: left;
  left: 0;
  right: 0;
  margin: auto;
}

/* #cropper::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("./bg1.png") 0 0/100% 100% no-repeat;
  z-index: 2;
} */
#imgbg {
  z-index: 2;
  top: 0;
  position: absolute;
}
#zpy {
  margin-top: 5px;
}
#resut {
  width: 60%;
}
#tishi {
  color: #b21919;
  font-size: 17px;
}
#bertishi{
  background-color: rgba(6, 6, 6, .6);
  z-index: 20;
  height: 100vh;
  position: absolute;
  width: 100%;
}
</style>
