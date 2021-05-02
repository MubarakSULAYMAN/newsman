<template>
  <p><span>Go Back</span> or <span>Return Home</span></p>
</template>

<script>
export default {
  methods: {
    goBack() {
      return window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    },

    returnHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
p {
  width: fit-content;
  font-size: var(--font-lg);
  font-family: 'Helvetica Bold Italic';
  font-style: italic;
  font-weight: bold;
  transition: all 0.5s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

span {
  position: relative;
  padding: 0 0.25rem;
  margin: 0 0.25rem;
}

p span:hover {
  color: var(--github-black);
  cursor: pointer;
}

p span::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: var(--github-blue);
  opacity: 0.5;
  transition: all;
}

p span:hover::after {
  height: 50%;
}

@media only screen and (max-width: 425px) {
  p {
    font-size: var(--font-xs);
  }

  span {
    position: relative;
    margin: 0;
  }
}
</style>
