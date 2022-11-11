export default function formatDate(date: string) {
  const today = new Date();
  const newDate = new Date(date);
  const getDiff = Math.ceil((today.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24));
  const labelDays = getDiff > 1 ? 'days' : 'day';
  return `${getDiff} ${labelDays} ago`;
}
