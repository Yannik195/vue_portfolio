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
  color: #353a5a;
  border: 2px #353a5a solid;
  border-radius: 4px;
  padding: 2px 4px;
  margin: 0 4px 0 0;
}
</style>