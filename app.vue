<template>
  <div>
    <NavBar/>
    <Start v-if="route.path == '/'"/>
    <Gallery v-if="route.path == '/gallery' || route.path == '/interaction'" :assets="assets"/>
    <Preview v-if="route.path == '/interaction'"/>
  </div>
</template>

<script setup>
const assets = useAssets();
const route = useRoute();
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
