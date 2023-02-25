<template>
  <div class="preview">
    <template v-if="selectedAsset == null"><p>Kein Asset ausgewählt.</p></template>
    <template v-else>
      <main>
        <PreviewInteraction :asset="selectedAsset" :interaction="selectedInteraction"/>
      </main>
      <aside>
        <PreviewInteractionButton v-for="interaction in interactions" :interaction="interaction"
                                  @click="selectInteraction(interaction)"/>
      </aside>
    </template>
  </div>
</template>

<script lang="ts" setup>
const selectedAsset = useState<Asset | null>('asset');
const selectedInteraction = useState<Interaction | null>('interaction');
const interactions = useInteractions();
const selectInteraction = (interaction: Interaction) => {
  selectedInteraction.value = interaction;
};
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
