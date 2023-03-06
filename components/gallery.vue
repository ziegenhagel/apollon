<template>
  <div class="gallery">
    <GalleryAsset @click="selectAsset(asset)" v-for="asset in assets" :asset="asset"
                  @dblclick="previewAsset(asset)"
                  :class=" {selected: isSelected(asset)}
    "/>
  </div>
</template>

<script lang="ts" setup>
const selectedAssets = computed(() => {
  return props.assets.filter(asset => asset.selected);
});

const selectAsset = (asset: Asset) => {

  // if shift is pressed, select all assets between the last selected asset and the current asset
  if (event.shiftKey && selectedAssets.value.length > 0) {
    const lastSelectedAsset = selectedAssets.value[selectedAssets.value.length - 1];
    const lastSelectedAssetIndex = props.assets.indexOf(lastSelectedAsset);
    const currentAssetIndex = props.assets.indexOf(asset);
    const start = Math.min(lastSelectedAssetIndex, currentAssetIndex);
    const end = Math.max(lastSelectedAssetIndex, currentAssetIndex);
    for (let i = start; i <= end; i++) {
      props.assets[i].selected = true;
    }
  } else if (event.altKey) {
    asset.selected = !asset.selected;
  } else {
    props.assets.forEach(asset => asset.selected = false);
    asset.selected = true;
  }
};

const isSelected = (asset: Asset) => {
  return selectedAssets.value.includes(asset);
};

const props = defineProps<{
  assets: Asset[];
}>();

const router = useRouter();
const previewAsset = (asset: Asset) => {
  router.push({path: '/preview'});
};
</script>



