export class ObjectUtils {
  /**
   * Creates a deep clone of the given object.
   * Uses structuredClone internally.
   */
  static clone<T>(value: T): T {
    return structuredClone(value);
  }

  /**
   * Removes keys with null or undefined values.
   */
  static removeNulls<T extends Record<string, unknown>>(obj: T): Partial<T> {
    const result: Partial<T> = {};

    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (value !== null && value !== undefined) {
        result[key as keyof T] = value as T[keyof T];
      }
    });

    return result;
  }

  /**
   * Removes keys with null, undefined, or empty string values.
   */
  static removeNullsAndEmptyStrings<T extends Record<string, unknown>>(obj: T): Partial<T> {
    const result: Partial<T> = {};

    Object.keys(obj).forEach((key) => {
      const value = obj[key];

      if (
        value !== null &&
        value !== undefined &&
        !(typeof value === 'string' && value.trim() === '')
      ) {
        result[key as keyof T] = value as T[keyof T];
      }
    });

    return result;
  }

  /**
   * Converts a plain object into FormData.
   * Appends only non-null, non-empty values.
   */
  static toFormData<T extends Record<string, unknown>>(payload: T): FormData {
    const formData = new FormData();

    Object.keys(payload).forEach((key) => {
      const value = payload[key];

      if (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.trim() === '')
      ) {
        return;
      }

      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    });

    return formData;
  }
}
