<template>
  <button v-html="interaction.icon"
          :class="{selected: selectedInteraction?.name == interaction.name, enabled: interaction.types.includes(asset?.type)}"/>
</template>

<script lang="ts" setup>
type Interaction = {
  icon: string;
  name: string;
  types: string[]
}
const props = defineProps<{
  interaction: Interaction;
  asset: Asset;
}>();

const selectedInteraction = useState<Interaction | null>('interaction');
</script>

