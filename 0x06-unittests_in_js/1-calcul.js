// Function to perform mathematical operation based on the type parameter
function calculateNumber(type, a, b) {
  // Round the input numbers to the nearest integer
  const aRound = Math.round(a);
  const bRound = Math.round(b);
  
  // Perform the operation based on the type parameter
  if (type === 'SUM') {
    // Return the sum of the rounded numbers
    return aRound + bRound;
  }
  if (type === 'SUBTRACT') {
    // Return the subtraction of the rounded numbers
    return aRound - bRound;
  }
  if (type === 'DIVIDE') {
    // Check if division by zero will occur
    if (bRound === 0) {
      // Return 'Error' if division by zero
      return 'Error';
    }
    // Return the division of the rounded numbers
    return aRound / bRound;
  }
}

// Export the calculateNumber function for external use
module.exports = calculateNumber;

