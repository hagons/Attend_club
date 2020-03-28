type custumAny = number | string;

export const SQLMonth = (month: custumAny) => {
  var year = new Date().getFullYear();
  month = (month < 10 ? '0' : '') + month;
  return year + '-' + month + '-%';
};

export const CustumDate = () => {
  var date = new Date();
  var hour: custumAny = date.getHours();
  hour = (hour < 10 ? '0' : '') + hour;
  var min: custumAny = date.getMinutes();
  min = (min < 10 ? '0' : '') + min;
  var sec: custumAny = date.getSeconds();
  sec = (sec < 10 ? '0' : '') + sec;
  var year = date.getFullYear();
  var month: custumAny = date.getMonth() + 1;
  month = (month < 10 ? '0' : '') + month;
  var day: custumAny = date.getDate();
  day = (day < 10 ? '0' : '') + day;
  return year + month + day + hour + min + sec;
};
