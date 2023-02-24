<template>
  <div>
    <NavBar/>
    <Gallery :assets="assets"/>
    <Preview/>
  </div>
</template>

<script setup>
const assets = useAssets();
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #333;
  color: #fff;
  font-family: "Apple Braille", sans-serif;
}
</style>
