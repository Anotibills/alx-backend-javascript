export default function cleanSet(inputSet, startString) {
  if (!startString || typeof startString !== 'string' || typeof inputSet !== 'object') return '';
  return [...inputSet]
    .filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');
}
