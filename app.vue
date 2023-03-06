<template>
  <div :class="'page page-'+route.path.substring(1)+' object-fit-'+toolbar.objectFit"
       :key="route.path">
    <NavBar/>

    <Start v-if="route.path == '/'"/>
    <Moodboard v-else-if="route.path == '/moodboard'"/>
    <Gallery :key="toolbar.columns" v-else-if="route.path == '/gallery'" :assets="assets"/>
    <Preview :key="toolbar.columns" v-else-if="route.path == '/preview'"/>

  </div>
</template>

<script setup>
const assets = useAssets();
const route = useRoute();
const toolbar = useToolbar()
// const toolbar_columns = computed(() => toolbar.value.columns)
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
  grid-template-columns: repeat(v-bind('toolbar.columns'), 1fr);
}
</style>
