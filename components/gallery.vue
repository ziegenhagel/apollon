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

/*
interface AssetObject {
  src: string;
  thumbSrc: string;
  alt: string;
}

enum AssetInteraction {
  zoom,
  compare,
  highlight,
  speed
}

interface AssetComment {
  text: string;
  date: string
}

interface Asset {
  id: number;
  title: string;
  type: string;
  objects: AssetObject[];
  categories: string[];
  rating: number;
  interactions: AssetInteraction[];
  comments: AssetComment[];
}
*/

const props = defineProps<{
  assets: Asset[];
}>();
</script>


