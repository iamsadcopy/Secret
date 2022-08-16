<template>
  <div>
    <span><router-link v-bind:to="`/secret/${urlPath}`" target="_blank">{{urlLink}}</router-link></span>
  </div>
</template>

<script>
export default {
  props: {
    urlPath: {
      type: String,
      required: true
    },
    urlLink: {
      type: String,
      required: true
    }
  },
  name: 'EncryptionLink'
}
</script>

<style scoped>

</style>
