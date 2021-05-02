<template>
  <div class="flex-col">
    <div class="note">
      <p>At home but far away from home.</p>
      <p>Our routes options will always guide you rightly, try that!</p>
    </div>
    <!-- <img src="@/assets/images/github-in-space.png" alt="" /> -->
    <the-shortcuts class="shortcuts" />
  </div>
</template>

<script>
import TheShortcuts from '../layouts/TheShortcuts.vue';

export default {
  components: { TheShortcuts },
};
</script>

<style scoped>
div:not(.note) {
  position: relative;
  width: 100%;
  height: fit-content;
  font-family: 'Helvetica Rounded Bold';
  font-style: normal;
  font-weight: bold;
}

div.note {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
}

p:first-child {
  color: var(--github-white);
  font-size: var(--font-xl);
}

p:nth-child(2) {
  font-size: var(--font-md);
  color: var(--github-white);
  font-family: 'Helvetica Light';
  font-style: normal;
  font-weight: lighter;
}

img {
  width: 100%;
}

.shortcuts {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

@media only screen and (max-width: 768px) {
  div.note {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }

  p:first-child {
    font-size: var(--font-lg);
  }

  p:nth-child(2) {
    font-size: var(--font-normal);
  }

  /* img {
        margin-top: 1rem;
    } */

  .shortcuts {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

@media only screen and (max-width: 425px) {
  div.note {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
  }

  div:not(.note) {
    justify-content: center;
    align-content: center;
    margin-bottom: 1rem;
  }

  p:first-child {
    font-size: var(--font-normal);
  }

  p:nth-child(2) {
    font-size: var(--font-xs);
  }
}
</style>
