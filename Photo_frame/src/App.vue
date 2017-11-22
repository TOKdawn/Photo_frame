<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
 
}
body{
  padding: 0px 20px;
  margin: 0;
}
#cropper>div:nth-child(2){
  z-index: 5;
  background: transparent;
}
/* #cropper>div:nth-child(3){
  z-index: 5;
} */
</style>
