<template>
  <el-container>
  <el-header  id="header"> 
    <el-carousel indicator-position="outside" arrow="never" height="65vh" >
    <el-carousel-item v-for="item in 4" :key="item">
      <h3></h3>
    </el-carousel-item>
  </el-carousel>
  </el-header>
  <el-main><p>生成你的大东软个性贺卡</p>
  <el-button type="warning" round @click="link">制作海报</el-button>
  </el-main>
  <div id="footer">策划: 品牌发展部&nbsp 研发:微光网络工作室</div>
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
  height: 75vh !important;
  background-color: chocolate;
  padding-top: 3vh;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.5;
    line-height: 200px;
    margin: 0;
  }
  .el-main{
    padding: 10px;
  }
  .el-carousel__item:nth-child(1) {
    background:url(./1.jpg) 0 0/100% 100% no-repeat;
  }
  
  .el-carousel__item:nth-child(2) {
    background:url(./2.jpg) 0 0/100% 100% no-repeat;
  }
  .el-carousel__item:nth-child(3) {
    background:url(./3.jpg) 0 0/100% 100% no-repeat;
  }
  .el-carousel__item:nth-child(4) {
    background:url(./4.jpg) 0 0/100% 100% no-repeat;
  }
  .el-header{
    padding: 0 35px;
  }
  #footer{
    position: absolute;
    display: block;
    font-size: 10px;
    text-align: center;
    bottom: 0px;
    width: 100%;
    background-color: #e1e1e1;
    color: #888;
  }
</style>
