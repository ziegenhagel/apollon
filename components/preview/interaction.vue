<template>
  <div v-if="interaction == null">
    <p>Keine Interaktion ausgewählt.</p>
  </div>
  <div v-else-if="asset == null">
    <p>Kein Asset ausgewählt.</p>
  </div>
  <div v-else>
    <p>
      Hier wird das {{ asset.type }} "{{ asset.title }}" mit der {{ interaction.name }}-Interaktion angezeigt.
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  asset: Asset;
  interaction: Interaction;
}>();
</script>
