export default function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours() > 11 ? a.getHours() - 12 : a.getHours();
  const mer = a.getHours() > 11 ? 'PM' : 'AM';
  const min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes();
  const sec = a.getSeconds() < 10 ? `0${a.getSeconds()}` : a.getSeconds();
  return `${month} ${date}, ${year} ${hour}:${min}:${sec} ${mer}`
}