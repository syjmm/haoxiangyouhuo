<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background: #f5f5f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-weight:750px;
  margin:0 auto;
  over-flow:hidden;

}
*{
  margin: 0;           /*  body-8px */
  padding: 0;
  text-decoration-line: none ;
  font-style: normal;
  list-style: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0) ;
  box-sizing: border-box;
}
img{
  width: 25%;
  border: 0;
  display: inline-block;
}
</style>
