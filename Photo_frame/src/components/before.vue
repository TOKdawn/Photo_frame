<template>
  <el-container>
  <el-header  id="header"> 
    <el-carousel indicator-position="outside" arrow="never" height="60vh" autoplay="ture">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </el-header>
  <el-main><p>以有定时达大所多</p>
  <el-button type="info" round @click="link">信息按钮</el-button>
  </el-main>
</el-container>
</template>

<script>
export default {
  methods: {
    link: function(){
      this.$router.push({ path: '/hello' })
    }
  }
}
</script>
<style>
#header{
  height: 70vh !important;
  background-color: chocolate;
  padding-top: 5vh;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.5;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
