<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("../src/assets/css/common/reset.css");
@import url("../src/assets/css/common/common.css");

@font-face {
  font-family: 'NotoSansKR-Regular';
  src: url('assets/fonts/NotoSansKR-Regular.otf');
}
@font-face {
  font-family: 'Trirong-Regular';
  src: url('assets/fonts/Trirong-Regular.ttf');
}
@font-face {
  font-family: 'Trirong-Medium';
  src: url('assets/fonts/Trirong-Medium.ttf');
}

#app {
  width: 100%;
  color: #d2ad75;
  background-color: #1d1a1b;
  overflow-x: hidden;
  font-family: 'NotoSansKR-Regular', sans-serif;
}

a {
  color: #d2ad75;
}
</style>
