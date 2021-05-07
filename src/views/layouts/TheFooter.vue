<template>
 <!-- absolute -->
  <v-footer dark padless class="mt-12">
    <v-card class="flex" flat tile>
      <v-card-title class="indigo" dark>
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          dark
          icon
          :href="'https://' + icon.route"
          target="_blank"
          rel="noopener noreferrer"
        >
          <!-- <a href="https://ng.linkedin.com › mubarak-sulayman-98052189" target="_blank" rel="noopener noreferrer"> -->
          <v-icon size="24px"> mdi-{{ icon.name }} </v-icon>
          <!-- </a> -->
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 indigo white--text text-center">
        &copy; {{ copyright() }} —
        <strong>
          <v-btn
            href="http://github.com/MubarakSULAYMAN/newsman"
            target="_blank"
            rel="noopener noreferrer"
            color="white"
            text
            rounded
          >
            Mubarak SULAYMAN
          </v-btn>
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',

  data() {
    return {
      icons: [
        {
          name: 'github',
          route: 'github.com/MubarakSULAYMAN',
        },
        {
          name: 'twitter',
          route: 'twitter.com/mubaraksulayman',
        },
        {
          name: 'linkedin',
          route: 'linkedin.com/mubarak-sulayman-98052189',
        },
      ],
    };
  },

  methods: {
    copyright() {
      if (new Date().getFullYear() > 2021) {
        return `2021 - ${new Date().getFullYear()}`;
      }
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
</style>
