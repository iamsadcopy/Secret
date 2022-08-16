<template>
  <div>
    <form>
      <textarea v-model="content"></textarea>
      <button v-on:click.prevent="generateLink">Generate link</button>
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

</style>
