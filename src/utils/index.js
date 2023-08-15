const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

export function getWeeks() {
  const endOfWeek = new Date();
  endOfWeek.setDate(endOfWeek.getDate() - endOfWeek.getDay() + 6);

  const start = new Date(endOfWeek);
  start.setDate(start.getDate() - 356);

  const weekDates = [];

  for (let i = 0; i < 357; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(currentDate.getDate() + i);
    weekDates.push(currentDate);
  }

  return weekDates;
}

export function getMonths() {
  const start = new Date();
  start.setMonth(start.getMonth() - 11);

  const months = [];

  for (let i = 0; i < 12; i++) {
    const currentMonth = new Date(start);
    currentMonth.setMonth(currentMonth.getMonth() + i);
    months.push(currentMonth.toLocaleString("ru-RU", { month: "short" }));
  }

  return months;
}
export function formatDate(date, format) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("ru-RU", options).format(date);

  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  if (format === "YYYY-MM-DD") {
    return `${year}-${month}-${day}`;
  } else if (format === "dddd, MMMM DD, YYYY") {
    console.log(date.getDate());
    return `${daysOfWeek[day[0]]}, ${formattedDate}`;
  }

  return formattedDate;
}
