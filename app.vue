<template>
  <div :class="'page page-'+route.path.substring(1)+' object-fit-'+toolbar.objectFit"
       :key="route.path">
    <NavBar/>

    <Transition>
      <Start v-if="page == '/'"/>
      <Moodboard v-else-if="page == '/moodboard'"/>
      <Gallery :key="toolbar.columns" v-else-if="page == '/gallery'" :assets="assets"/>
      <Preview :key="toolbar.columns" v-else-if="page == '/preview'"/>
    </Transition>

  </div>
</template>

<script setup>
const page = useState('page', '/');
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
