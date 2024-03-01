const Utils = {
  // Method to perform various mathematical operations based on the type
  calculateNumber(type, a, b) {
    // Round the values of 'a' and 'b'
    const aRound = Math.round(a);
    const bRound = Math.round(b);
    
    // Perform operations based on the 'type' parameter
    if (type === 'SUM') {
      // If type is 'SUM', return the sum of rounded values of 'a' and 'b'
      return aRound + bRound;
    }
    if (type === 'SUBTRACT') {
      // If type is 'SUBTRACT', return the subtraction of rounded values of 'a' and 'b'
      return aRound - bRound;
    }
    if (type === 'DIVIDE') {
      // If type is 'DIVIDE', perform division of rounded values of 'a' and 'b'
      // Check if 'bRound' is zero to avoid division by zero
      if (bRound === 0) {
        return 'Error'; // Return 'Error' if division by zero is attempted
      }
      // Otherwise, return the division of rounded values of 'a' and 'b'
      return aRound / bRound;
    }
  },
};
  
module.exports = Utils;
