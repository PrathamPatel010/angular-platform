export class DateUtils {
  /**
   * Checks whether startDate is before endDate.
   */
  static isBefore(startDate: Date, endDate: Date): boolean {
    return startDate.getTime() < endDate.getTime();
  }

  /**
   * Checks whether startDate is after endDate.
   */
  static isAfter(startDate: Date, endDate: Date): boolean {
    return startDate.getTime() > endDate.getTime();
  }

  /**
   * Compares two dates ignoring time.
   */
  static isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}
