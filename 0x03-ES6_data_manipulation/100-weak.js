export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const currentCount = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, currentCount + 1);
  if (weakMap.get(endpoint) >= 5) throw Error('Endpoint load is high');
}
