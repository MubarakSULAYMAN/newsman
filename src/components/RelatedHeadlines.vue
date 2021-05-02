<template>
  <v-container fluid class="pa-0">
    <v-card v-for="x in 10" :key="x" class="related-headline mb-6" dark>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-subtitle class="headline subtitle-1"
            >Headline</v-card-subtitle
          >

          <v-card-actions>
            <v-btn class="button ml-2 mt-5" outlined rounded small>
              Read Now
            </v-btn>
          </v-card-actions>
        </div>

        <v-avatar class="ma-3" :size="avatarSize()" tile>
          <v-img src="https://picsum.photos/200/300" max-height="125"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'RelatedHeadlines',

  methods: {
    avatarSize() {
      if (this.$vuetify.breakpoint.name === 'lg') {
        return 125;
      }
      return 100;
    },
  },
};
</script>

<style scoped>
.related-headline,
.headline,
.button {
  color: #3f51b5;
  background-color: #ffffff;
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.headline {
  color: #3f51b5 !important;
}

.related-headline:hover {
  background-color: #3f51b5;
}

.related-headline:hover .headline {
  color: #ffffff !important;
  background-color: #3f51b5 !important;
}

.related-headline:hover .button {
  border: 1px solid #ffffff;
}
</style>
