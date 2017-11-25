<template>
<div id="sss" ref="container" :style="{width: lastwidth+'px',height: lastheight+'px'}">
  sss
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
  @realTime="realTime"
></vueCropper>
<label class="btn" for="uploads">upload</label>
	<input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
	 accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg">
   <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
			<button @click="finish('base64')" class="btn">preview(base64)</button>
	</div>
	<canvas id="myCanvas" width="500" height="300" ></canvas>
  <img :src = "zbase64[0]">
  sssssss
</div>

</template>
<script>
import vueCropper from 'vue-cropper'
export default {
	data: function () {
		return {
			c: [],
      zbase64: [],
     previews: {},
      lastwidth: 100,
      lastheight: 200,
      fullwidth: 100,
      maxWidth: 30000,
      maxHeight: 30000,
      fixedNumber: [6,9],
      option: {
        size: 1,
        outputType: 'jpg',
        img: require('./img.jpg'),
      }
		}
  },
  methods: {
		changeImg () {
			this.option.img = this.lists[~~(Math.random() * this.lists.length)].img
		},
		startCrop () {
			// start
			this.crap = true
			this.$refs.cropper.startCrop()
		},
		stopCrop () {
			//  stop
			this.crap = false
			this.$refs.cropper.stopCrop()
		},
		clearCrop () {
			// clear
			this.$refs.cropper.clearCrop()
		},
		// 实时预览函数
		realTime (data) {
			this.previews = data
		},

		finish(type) {
    // 输出
    var test = window.open('about:blank') 
	this.$refs.cropper.getCropBlob((data) => {
        var c = document.getElementById('myCanvas') 
		var ctx = c.getContext('2d') 
		c.width = this.lastwidth 
		c.height = this.lastheight 
		ctx.rect(0, 0, c.width, c.height);
		console.log("创建canvas")
        ctx.fill();
		for(var i= 0;i<2;i++){
			if(i===0){
				console.log("进入绘制")
				  var img = new Image;
       			  img.src = window.URL.createObjectURL(data);
				  img.onload = function() {
           	 	  		console.log("绘制内容") 
				  		ctx.drawImage(img, 0, 0, c.width, c.height);
				  		var img2 = new Image;
       		 	  		img2.src = require('./bg2.png')
				  		img2.onload = function() {
           					 console.log("绘制背景") 
							 	ctx.drawImage(img2, 0, 0, c.width, c.height);
       					}		
      			 }
			}else{
					console.log("填充数组")
        			this.zbase64.push(c.toDataURL("image/png", 0.8));
			}
		}
        // console.log(this.zbase64[0])
    }) 
	// this.zbase64.push(c.toDataURL("image/png", 0.8));
	test.document.body.innerHTML = '</p>aa<img :src="' + this.base64 + '">'
},

		down (type) {
			// event.preventDefault()
			var aLink = document.createElement('a')
			aLink.download = 'demo'
			// 输出
			if (type === 'blob') {
				this.$refs.cropper.getCropBlob((data) => {
					this.downImg = data
					aLink.href = data
					aLink.click()
				})
			} else {
				this.$refs.cropper.getCropData((data) => {
					this.downImg = data
					aLink.href = data
					aLink.click()
				})
			}
    },
   
		uploadImg (e, num) {
			//上传图片
			// this.option.img
			var file = e.target.files[0]
			if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
				 alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
				 return false
			 }
			var reader = new FileReader()
			reader.onload = (e) => {
				let data
				if (typeof e.target.result === 'object') {
					// 把Array Buffer转化为blob 如果是base64不需要
					data = window.URL.createObjectURL(new Blob([e.target.result]))
				} else {
					data = e.target.result
        }
        num=1
        // console.log(num)
				if (num === 1) {
          this.option.img = data
          console.log(data)
				} else if (num === 2) {
					this.example2.img = data
				}
			}
			// 转化为base64
			// reader.readAsDataURL(file)
			// 转化为blob
			reader.readAsArrayBuffer(file)
		}
	},
	components: {
		vueCropper
  } ,
  created(){
      var fullwidth =  document.body.clientWidth
      this.lastwidth = fullwidth*0.8
      this.lastheight = this.lastwidth/6*9
      console.log(this.lastwidth,this.lastheight)
    },
//  mounted() {
//     var cropper = this.$refs['container']
//     console.log(this.$refs['container'].style.width)
//     this.maxWidth = cropper.style.width
//     this.maxHeight = cropper.style.height
//   }
}
</script>
<style scoped>
#sss{
  display: block;
  background: #a0c;
  text-align: left;
  left: 0;
  right: 0;
  margin: auto;
}
#cropper::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('./bg2.png') 0 0/100% 100% no-repeat;
  z-index: 2;
}

</style>
