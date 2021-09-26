<template>
  <span>#{{ tag }}</span>
</template>

<script>
export default {
  name: "Tag",
  props: ["tag"],
};
</script>

<style scoped>
span {
  color: var(--blue-two);
  border: 1px var(--blue-two) solid;
  border-radius: 4px;
  padding: 2px 4px;
  margin: 0 4px 0 0;
  font-size: 12px;
}
</style>