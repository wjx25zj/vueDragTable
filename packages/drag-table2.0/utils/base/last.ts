export function last(array: any[]) {
  const length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}