<template>
  <button v-html="interaction.icon"
          :class="{selected: selectedInteraction?.name == interaction.name, enabled: interaction.types.includes(selectedAsset?.type)}"/>
</template>

<script lang="ts" setup>
type Interaction = {
  icon: string;
  name: string;
  types: string[]
}
const props = defineProps<{
  interaction: Interaction;
}>();

const selectedInteraction = useState<Interaction | null>('interaction');
const selectedAsset = useState<Asset | null>('asset');
</script>

