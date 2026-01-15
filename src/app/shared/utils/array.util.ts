export class ArrayUtils {
  /**
   * Checks if array is null, undefined, or empty.
   */
  static isNullOrEmpty<T>(value: T[] | null | undefined): boolean {
    return !Array.isArray(value) || value.length === 0;
  }

  /**
   * Removes duplicate items using a selector.
   */
  static distinctBy<T, K>(array: T[], selector: (item: T) => K): T[] {
    const map = new Map<K, T>();
    array.forEach((item) => map.set(selector(item), item));
    return Array.from(map.values());
  }
}
