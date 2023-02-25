<template>
  <div class="gallery">
    <GalleryAsset @click="selectAsset(asset)" v-for="asset in assets" :asset="asset"
                  :class="{selected: selectedAsset?.id == asset.id}"/>
  </div>
</template>

<script lang="ts" setup>
const selectedAsset = useState<Asset | null>('asset');
const selectAsset = (asset: Asset) => {
  selectedAsset.value = asset;
};

const props = defineProps<{
  assets: Asset[];
}>();
</script>


