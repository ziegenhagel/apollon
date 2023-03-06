<template>
  <div :class="'page page-'+route.path.substring(1)+' object-fit-'+toolbar.objectFit"
       :key="route.path">
    <NavBar/>
    <Gallery :key="toolbar.columns" v-if="route.path == '/gallery' || route.path == '/interaction'" :assets="assets"/>
    <Preview :key="toolbar.columns" v-if="route.path == '/interaction'"/>
    <Moodboard v-if="route.path == '/moodboard'"/>
    <Start v-if="route.path == '/'"/>
  </div>
</template>

<script setup>
const assets = useAssets();
const route = useRoute();
const toolbar = useToolbar()
const toolbar_columns = computed(() => toolbar.value.columns)
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

.gallery {
  grid-template-columns: repeat(v-bind('toolbar_columns'), 1fr);
}
</style>
