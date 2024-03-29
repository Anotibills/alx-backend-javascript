export default function createInt8TypedArray(length, index, val) {
  if (index < 0 || index >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer, 0, length);
  int8View.set([val], index);
  return new DataView(buffer);
}
