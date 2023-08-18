/**
 * Create a hard copy (deep copy) of an object.
 * This function uses JSON.parse() and JSON.stringify()
 * to create a completely independent copy of the object
 * with its nested objects and arrays.
 *
 * Note: This method cannot copy functions or properties
 * with circular references.
 *
 * @param {object} obj - The object to be copied.
 * @returns {object} - A completely independent copy of the object.
 */
export function hardCopyObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
