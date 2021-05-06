function openNews(headline, article) {
  // TODO: Introduce a mixin here and news headline
  let url = headline;
  const punctuations = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  if (!url) {
    url = null;
  }

  if (url.length > 2083) {
    url = url
      .toLowerCase()
      .slice(0, 2083)
      .replace(punctuations, '+')
      .replace(/\s/g, '-');
  }

  url = url.toLowerCase().replace(punctuations, '+').replace(/\s/g, '-');

  this.$router.push(`/news/${url}`);
  this.$store.dispatch('updateSelectedNews', article);
}

export default {
  created() {
    return openNews;
  },
};
