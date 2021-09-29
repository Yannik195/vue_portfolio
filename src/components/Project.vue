<template>
  <div class="project">
    <div v-if="project.id % 2 == 1" class="wrapper-uneven" data-aos="fade-up">
      <img
        src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div class="info">
        <h1>{{ project.name }}</h1>
        <h3>{{ project.description }}</h3>
        <Tag
          class="tag"
          v-for="tag in project.tags"
          :key="tag"
          v-bind:tag="tag"
        ></Tag>
      </div>
    </div>
    <div v-else class="wrapper-even" data-aos="fade-up">
      <div class="info">
        <h1>{{ project.name }}</h1>
        <h3>{{ project.description }}</h3>
        <Tag
          class="tag"
          v-for="tag in project.tags"
          :key="tag"
          v-bind:tag="tag"
        ></Tag>
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
  text-align: right;
}

img {
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  width: clamp(120px, 40vw, 600px);
}

h3 {
  color: var(--blue-two);
  margin: 0;
}

.project {
  margin: 24px 0;
}

.info {
  margin: 0 12px;
}

.tag:last-child {
  margin: 0;
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
    width: clamp(12px, 94vw, 500px);
    margin: 0 16px;
  }

  .info {
    margin: 0;
  }
}
</style>