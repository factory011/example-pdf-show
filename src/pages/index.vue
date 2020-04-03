<template>
  <div class="wrap">
    <iframe src="pdf/web/viewer.html"
            style="width: 100%; height: 100%"
            frameborder="0" />
    <!-- <a href="pdf/web/viewer.html">wqeeq</a> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: encodeURIComponent()
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  height: 400px;
  width: 1000px;
  margin: 0 auto;
}

a {
  width: 60px;
  height: 30px;
}
</style>
