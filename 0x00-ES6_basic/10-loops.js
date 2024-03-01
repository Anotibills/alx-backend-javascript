export default function appendToEachArrayValue(array, appendString) {
  const endArray = [];
  for (const idx of array) {
    endArray.push(`${appendString}${idx}`);
  }

  return endArray;
}
