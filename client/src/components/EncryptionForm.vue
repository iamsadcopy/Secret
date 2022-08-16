<template>
  <div>
    <form class="message-container">
      <textarea class="message-input" v-model="content"></textarea>
      <button class="generate-button" v-on:click.prevent="generateLink">Generate link</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    generateLink () {
      this.$emit('generate', this.content)
      this.content = ''
    }
  },
  name: 'EncryptionForm'
}
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  width: 600px;
}

.message-input {
  height: 300px;
  font-size: 20px;
  padding: 5px;
}

.generate-button {
  height: 30px;
  color: white;
  font-size: 20px;
  background-color: #476f6f;
}

.generate-button:hover {
  background-color: #3e7272;
}


</style>
