<template>
<div id="sss" ref="container">
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
</div>
</template>
<script>
import vueCropper from 'vue-cropper'
export default {
	data: function () {
		return {
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
		finish (type) {
			// 输出
			var test = window.open('about:blank')
			test.document.body.innerHTML = '图片生成中..'
			if (type === 'blob') {
				this.$refs.cropper.getCropBlob((data) => {
					var test = window.open('')
					test.location.href = window.URL.createObjectURL(data)
				})
			} else {
				this.$refs.cropper.getCropData((data) => {
					test.location.href = data
				})
			}
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
        console.log(data)
				if (num === 1) {
					this.option.img = data
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
	}
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
  width: 100%;
  height: 70vh;
  display: block;
  background: #a0c;
  text-align: left;
}
#cropper::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('./bg.png') 0 0/100% 100% no-repeat;
  z-index: 2;
}

</style>
