<template>
  <i :class="'dz-icon-' + name"></i>
</template>

<script>
export default {
  name: 'dz-icon',
  props: {
    name: String
  }
}
</script>

<style lang="scss">

</style>