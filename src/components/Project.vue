<template>
  <div>
    <div v-if="project.id % 2 == 1" class="wrapper-uneven">
      <img
        src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div>
        <h1>{{ project.name }}</h1>
        <h2>{{ project.description }}</h2>
        <Tag v-for="tag in project.tags" :key="tag" v-bind:tag="tag"></Tag>
      </div>
    </div>
    <div v-else class="wrapper-even">
      <div>
        <h1>{{ project.name }}</h1>
        <h2>{{ project.description }}</h2>
        <Tag v-for="tag in project.tags" :key="tag" v-bind:tag="tag"></Tag>
      </div>
      <img
        src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  name: "Project",
  props: ["project"],
  components: {
    Tag,
  },
};
</script>

<style scoped>
.wrapper-uneven {
  display: flex;
  justify-content: center;
}
.wrapper-even {
  display: flex;
  justify-content: center;
}

img {
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  width: clamp(120px, 40vw, 800px);
}

h2 {
  color: #353a5a;
}

@media only screen and (max-width: 900px) {
  .wrapper-even {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .wrapper-uneven {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
  }

  img {
    width: 80%;
  }
}
</style>