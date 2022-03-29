export const numberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const minifyAddress = address => {
  return address.substring(0, 6) + '...' + address.substring(address.length - 4)
}

export const convertTime = timestamp => {
  let d = new Date(timestamp);
  let pm = d.getHours() >= 12;
  let hour12 = d.getHours() % 12;
  let timezone = d.getTimezoneOffset() / 60;
  if (!hour12)
    hour12 += 12;
  let minute = d.getMinutes();
  return `${hour12}:${minute} ${pm ? 'PM' : 'AM'} GMT${timezone > 0 ? '-' : '+'}${Math.abs(timezone)}`
}

export const removeHttp = url => {
  return url.replace(/(^\w+:|^)\/\//, '').replaceAll('/', '');
}
