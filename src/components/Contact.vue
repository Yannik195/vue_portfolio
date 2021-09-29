<template>
  <div class="contact">
    <h1>Leave me a message</h1>
    <form name="contact" netlify>
      <input type="text" id="fname" name="fname" placeholder="E-Mail" />
      <textarea
        name="Text1"
        cols="40"
        rows="4"
        placeholder="Message"
      ></textarea>
      <button>SEND</button>
    </form>
    <h4>or contact me</h4>
    <h4>hallo@yanniksimon.de</h4>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  background: #ffed12;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px;
  text-align: center;
}

.contact > * {
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 24px 0;
}

form > * {
  margin: 6px 0;
}

input,
textarea {
  background: white;
  border-radius: 4px;
  color: var(--blue-one);
  font-size: 1.3rem;
  padding: 8px 12px;
}

::placeholder {
  color: var(--placeholder);
  font-size: 1.2rem;
}

button {
  background-color: var(--blue-one);
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 1.2rem;
}
</style>