<template>
  <div class="main-container">
    <EncryptionForm @generate="generate"/>
    <EncryptionLink :url-link="urlLink" :url-path="urlPath" />
  </div>
</template>

<script>
import EncryptionForm from '@/components/EncryptionForm'
import EncryptionLink from '@/components/EncryptionLink'

export default {
  data () {
    return {
      urlLink: '',
      urlPath: ''
    }
  },
  methods: {
    generate (content) {
      const data = {
        message: content
      }
      if (!data.message) {
        return
      }
      fetch('http://localhost:3000/api/secret', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(res => {
          this.urlPath = res.hash
          this.urlLink = `${window.location.origin}/secret/${this.urlPath}`
        })
    }
  },
  components: {
    EncryptionForm, EncryptionLink
  },
  name: 'EncryptionMain'
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
}

</style>
