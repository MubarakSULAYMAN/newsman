<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" persistent>
      <!-- TODO: Tooltip not working -->
      <!-- FIXME: Tooltip compatibity with v-sheet -->
      <!-- <v-tooltip right> -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="2"
          fab
          raised
          rounded
          color="indigo accent-4"
          small
          fixed
          bottom
          left
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </template>
      <!-- <span>Let me help you with your history &#129488; &#128519;</span>
      </v-tooltip> -->

      <v-sheet class="text-center">
        <v-btn class="mt-6" text color="red accent-4" @click="sheet = !sheet">
          close
        </v-btn>
      </v-sheet>

      <v-list>
        <v-subheader class="body-1 indigo--text text--darken-4">History</v-subheader>

        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-row class="">
            <v-col cols="1">
              <v-list-item-title>Time</v-list-item-title>
            </v-col>
            <v-col cols="11">
              <v-list-item-title>{{ tile.title }}</v-list-item-title>
            </v-col>
          </v-row>
          <!-- </v-container> -->
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: 'NewsHeadlinesHistory',

  data() {
    return {
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
