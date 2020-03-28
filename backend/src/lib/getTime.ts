type custumAny = number | string;

export const sqlMonth = (month: custumAny): custumAny => {
  const year = new Date().getFullYear();
  month = (month < 10 ? '0' : '') + month;
  return year + '-' + month + '-%';
};

export const custumDate = (): custumAny => {
  const date = new Date();
  let hour: custumAny = date.getHours();
  hour = (hour < 10 ? '0' : '') + hour;
  let min: custumAny = date.getMinutes();
  min = (min < 10 ? '0' : '') + min;
  let sec: custumAny = date.getSeconds();
  sec = (sec < 10 ? '0' : '') + sec;
  const year = date.getFullYear();
  let month: custumAny = date.getMonth() + 1;
  month = (month < 10 ? '0' : '') + month;
  let day: custumAny = date.getDate();
  day = (day < 10 ? '0' : '') + day;
  return year + month + day + hour + min + sec;
};

export default {
  sqlMonth,
  custumDate
};
