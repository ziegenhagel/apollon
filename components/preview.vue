<template>
  <div class="container">
    <template v-if="selectedAsset == null"><p>No asset selected.</p></template>
    <template v-else>
      <main>
        <p>Selected asset: {{ selectedAsset }}</p>
        <PreviewInteraction/>
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
.container {
  display: flex;
  background: green;
  background: #222;
  padding: 1em;
}

main {
  width: auto;
  flex: 1;
}

aside {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

</style>
