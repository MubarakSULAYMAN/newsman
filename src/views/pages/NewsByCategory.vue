<template>
  <div>Hello  News Category</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NewsDetails',

  metaInfo() {
    return {
      titleTemplate: `Newsman - ${this.newsCategory}`,
    };
  },

  computed: {
    ...mapGetters(['newsHeadline']),

    newsCategory() {
      return 'Nothing o';
    },
  },
};
</script>

<style scoped>
</style>
