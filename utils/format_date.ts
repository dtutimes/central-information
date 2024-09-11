import { DateFormatOptions } from "../types/date";

const formatDate = (dateString: string, options: DateFormatOptions = {}) => {
  const date = new Date(dateString);

  const dateOptions: Intl.DateTimeFormatOptions = {};
  const timeOptions: Intl.DateTimeFormatOptions = {};

  if (options.day || options.month || options.year) {
    if (options.day) dateOptions.day = "2-digit";
    if (options.month) dateOptions.month = "short";
    if (options.year) dateOptions.year = "numeric";
  }

  if (options.hour || options.minute || options.second) {
    if (options.hour) timeOptions.hour = "2-digit";
    if (options.minute) timeOptions.minute = "2-digit";
    if (options.second) timeOptions.second = "2-digit";
    timeOptions.hour12 = false;
  }

  const formattedDate =
    dateOptions.day || dateOptions.month || dateOptions.year
      ? date.toLocaleDateString("en-US", dateOptions)
      : "";

  const formattedTime =
    timeOptions.hour || timeOptions.minute || timeOptions.second
      ? date.toLocaleTimeString("en-US", timeOptions)
      : "";

  return `${formattedDate}${formattedDate && formattedTime ? ", " : ""}${formattedTime}`;
};
export { formatDate };
