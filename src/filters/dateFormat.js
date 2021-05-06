import dayjs from 'dayjs';
// import { relativeTime, LocalizedFormat } from 'dayjs/plugin/relativeTime';

function dateFormat(date) {
  if (!date) {
    return null;
  }

  // TODO: Add Time to now feature
  // const today = new Date().toLocaleDateString();

  // if (dayjs(date).format('DD/MM/YYYY') < today) {
  //   return dayjs(date).fromNow();
  // }

  return dayjs(date).format('DD.MM.YYYY');
}

export default {
  created() {
    return dateFormat;
  },
};
