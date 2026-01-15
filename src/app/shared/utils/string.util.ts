export class StringUtils {
  /**
   * Checks whether a string is null, undefined, or empty after trim.
   */
  static isNullOrEmpty(value: unknown): value is null | undefined | '' {
    return typeof value !== 'string' || value.trim().length === 0;
  }

  /**
   * Capitalizes the first character of a string.
   */
  static capitalize(value: string): string {
    if (this.isNullOrEmpty(value)) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
