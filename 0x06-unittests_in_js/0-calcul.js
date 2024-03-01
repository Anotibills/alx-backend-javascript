/**
 * Function to calculate the sum of twoof them to the nearest integer.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the rounded numbers.
 */
function calculateNumber(a, b) {
    // Round the first number to the nearest integer
    const roundedA = Math.round(a);
    // Round the second number to the nearest integer
    const roundedB = Math.round(b);
    // Return the sum of the rounded numbers
    return roundedA + roundedB;
}

module.exports = calculateNumber;
