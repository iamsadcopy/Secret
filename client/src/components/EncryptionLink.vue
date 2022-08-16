<template>
  <div class="link-container">
    <span><router-link class="link" v-bind:to="`/secret/${urlPath}`" target="_blank">{{urlLink}}</router-link></span>
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
.link-container {
  display: flex;
  width: 600px;
  padding: 10px;
}

.link {
  text-decoration: none;
  color: palevioletred;
}


</style>
