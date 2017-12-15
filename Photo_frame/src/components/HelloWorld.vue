<template>
<el-container>
  <el-main>
	  <div id="reust" :class="{hold:ishold}">
		  <img :src = "zbase64[0]" id="zpy" >
      <img src="./imaaa.png" id="resut">
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
      option: {
        size: 1,
        outputType: "jpg",
        img: require("./img.jpg"),
        bg: require("./bg1.png")
      }
    };
  },
  methods: {
    
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
	changBG(type){
		this.type = type
		console.log(type)
		switch(type){
			case 1:
			this.option.bg = require("./bg1.png")
			break;
			case 2:
			this.option.bg = require("./bg2.png")
			break;
			case 3:
			this.option.bg = require("./bg3.png")
			break;
			case 4:
			this.option.bg = require("./bg4.png")
			break;
		}
		console.log(this.type)
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
    
        const h = this.$createElement;

        this.$notify({
          title: '注意',
          message: h('i', { style: 'color: teal'}, '把图片放大缩写并移到合适位置')
        });
      
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
#imgbg{
	z-index: 2;
	top:0;
	position: absolute;
}
#zpy{
  margin-top:5px;
}
#resut{
  width: 60%;
}
#tishi{
  color: #B21919;
  font-size: 17px;
}
</style>
