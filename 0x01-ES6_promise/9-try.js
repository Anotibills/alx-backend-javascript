export default function guardrail(mathFunction) {
  const queue = [];
  let mathFunc;

  try {
    mathFunc = mathFunction();
    if (isNaN(mathFunc)) {
      throw new Error('Result is not a number');
    }
  } catch (error) {
    mathFunc = error.toString();
  }
  
  queue.push(mathFunc);
  queue.push('Guardrail was processed');
  return queue;
}
