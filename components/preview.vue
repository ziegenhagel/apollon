<template>
  <div class="preview">
    <template v-if="selectedAsset == null"><p>Kein Asset ausgewählt.</p></template>
    <template v-else>
      <main>
        {{ selectedAsset }}
        <PreviewInteraction :asset="selectedAsset" :interaction="selectedInteraction"/>
      </main>
      <aside>
        <button class="enabled">Info</button>
        <button class="enabled">Notiz</button>
        <button class="enabled">Tags</button>
        <hr/>
        <PreviewInteractionButton v-for="interaction in interactions" :interaction="interaction"
                                  :asset="selectedAsset"
                                  @click="selectInteraction(interaction)"/>
      </aside>
    </template>
  </div>
</template>

<script lang="ts" setup>
const assets = useAssets()
const selectedAssets = computed(() => assets.value.filter(asset => asset.selected))
const selectedAsset = computed(() => {
  if (selectedAssets.value.length == 1) {
    return selectedAssets.value[0];
  } else {
    return null;
  }
});

const interactions = useInteractions()
const selectedInteraction = useState<Interaction | null>('interaction')
const selectInteraction = (interaction: Interaction) => {
  selectedInteraction.value = interaction;
}
</script>

<style scoped>
.preview {
  display: flex;
  background: green;
  background: #222;
  gap: 1em;
}

main {
  width: auto;
  padding: 1em;
  flex: 1;
}

aside {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  background: #333;
}

</style>
