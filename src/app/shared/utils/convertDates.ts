export function convertDates(date: Date) {
  var month = "" + (date.getMonth() + 1);
  var day = "" + date.getDate();
  var year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function removeHoursFromDate(date: Date) {
  return new Date(date.toDateString());
}

export function buildDateWithoutTZ(date: string | Date) {
  const rawDate = new Date(date);
  const userTimezoneOffset = rawDate.getTimezoneOffset() * 60000;
  return new Date(rawDate.getTime() + userTimezoneOffset);
}
