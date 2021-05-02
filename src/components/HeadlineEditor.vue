<template>
  <v-card class="overflow-hidden" color="indigo lighten-1" dark>
    <v-toolbar flat color="indigo">
      <v-icon>mdi-newspaper-variant-outline</v-icon>
      <v-toolbar-title class="font-weight-light ml-2">
        Modify Headline
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="red accent-4" fab small @click="updateOverlay">
        <v-icon> mdi-close </v-icon>
      </v-btn>

      <v-btn
        class="ml-2"
        color="indigo darken-3"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <v-icon v-if="isEditing"> mdi-close </v-icon>
        <v-icon v-else> mdi-pencil </v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Name"
        @focus="onFocus = !onFocus"
        v-model="headline"
      ></v-text-field>

      <v-toolbar-title
        class="font-weight-thin subtitle-2 red--text text--accent-4 ml-2"
        v-if="onFocus"
      >
        You have 54 characters left to type.
      </v-toolbar-title>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!isEditing" color="success" @click="save"> Save </v-btn>
    </v-card-actions>
    <v-snackbar v-model="hasSaved" :timeout="500" absolute bottom left>
      {{ message }}
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: 'HeadlineEditor',

  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,

      onFocus: false,
      headline: '',
      message: 'The headline has been updated',
    };
  },

  methods: {
    updateOverlay() {
      this.$emit('overlayStatus');
    },

    save() {
      if (this.headline.length === 0) {
        this.hasSaved = true;
        this.message = 'New headline cannot be empty';
      } else {
        this.isEditing = !this.isEditing;
        this.hasSaved = true;
        this.message = 'The headline has been updated';
        setTimeout(() => {
          this.updateOverlay();
        }, 600);
      }
    },
  },
};
</script>

<style scoped>
</style>
