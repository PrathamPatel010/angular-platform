export class NumberUtils {
  /**
   * Checks if a value is a valid finite number.
   */
  static isNumber(value: unknown): value is number {
    return typeof value === 'number' && !Number.isNaN(value);
  }

  /**
   * Converts a value to number safely.
   */
  static toNumber(value: unknown, fallback = 0): number {
    const num = Number(value);
    return Number.isNaN(num) ? fallback : num;
  }

  /**
   * Fixes a number to given decimal places.
   */
  static toFixed(value: number, precision = 2): number {
    return Number(value.toFixed(precision));
  }
}
