<template>
  <div class="asset">
    <div class="object">
      <img v-if="asset.type === 'image'" :src="asset.objects[0].thumbSrc" :alt="asset.objects[0].alt"/>
      <audio v-else-if="asset.type === 'audio'" :src="asset.objects[0].thumbSrc" :alt="asset.objects[0].alt" controls/>
      <video v-else-if="asset.type === 'video'" :src="asset.objects[0].thumbSrc" :alt="asset.objects[0].alt" controls/>
    </div>
    <div class="caption">

      <svg v-if="asset.favorite" @click="toggleFavorite()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           fill="currentColor" class="w-6 h-6">
        <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
      </svg>
      <svg v-else @click="toggleFavorite()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
      </svg>


      <div v-if="showTitle">
        {{ asset.title }}
      </div>

      <div>
        <div>{{ asset.objects.length }}</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  asset: Asset;
}>();

const showTitle = ref(false);

const toggleFavorite = () => {
  props.asset.favorite = !props.asset.favorite;
};
</script>
