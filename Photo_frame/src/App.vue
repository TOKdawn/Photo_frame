<template>
  <div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
 
}
</script>
<style>
/* #cropper>div:nth-child(3){
  z-index: 5;
} */
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
body{
  padding: 0px 0px;
  margin: 0;
  background-color: #eee;
 
}
#cropper>div:nth-child(2){
  z-index: 5;
  background: transparent;
}
</style>
