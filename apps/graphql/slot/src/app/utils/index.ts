/**
 * @function
 * Check for Date format and corrects it if it does not meet the required format
 *
 * @param {string} dateAsString ["YYYY-MM-DD"]
 *
 * @returns {string}
 */
export const checkFormat = (dateAsString: string): string => {
  // FETCHING DATE FIELD
  let tempDate = dateAsString.split('-');
  let dateFromString: string =
    parseInt(tempDate[2], 10) < 10 ? `0${parseInt(tempDate[2], 10)}` : tempDate[2];
  tempDate.splice(2, 1, dateFromString);
  return tempDate.join('-');
};

/**
 * @function dateDiffInDays
 * Calculates the difference between 2 dates
 * and returns back value in number of days
 *
 * @param {Date} startDate
 * @param {Date} endDate
 *
 * @returns {number}
 */
export const dateDiffInDays = (startDate: Date, endDate: Date): number => {
  const dateDiff = endDate.getTime() - startDate.getTime();
  return Math.ceil(dateDiff / (1000 * 3600 * 24));
};

/**
 * @function getFormattedDate
 * Returns Date in "YYYY-MM-DD" format
 *
 * @param {Date} date
 *
 * @returns {string}
 */
export const getFormattedDate = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
