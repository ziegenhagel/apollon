<script lang="ts" setup>
const assets = useAssets();
</script>

<template>
  <div>
    <div class="moodboard cover">
      <template v-for="asset in assets">
        <GalleryAsset :asset="asset" :data-favorite="asset.favorite" :data-liked="Math.random() > 0.5"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
/*
.gallery should fill the whole screen and show all images at once filling the whole screen
images  with data-favorite="true" should be twice as big as the others
all images have to be visible at once
dont have empty spots
 */

.moodboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, 1fr);
  grid-gap: 0;
  height: 100vh;
  width: 100vw;
  overflow: auto;
}

.moodboard .asset {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.moodboard .asset[data-favorite="true"] {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
