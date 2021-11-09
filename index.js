// Function that rotates the matrix once by 90 degrees clockwise
function rotateMatrix(m) {
  let originalM = [...m];
  let size = m[0].length;
  let rotatedMatrix = [];

  for (let j = 0; j < size; j++) {
    let newRow = [];
    for (let i = 0; i < size; i++) {
      newRow.push(m[i][j]);
      if (i === j) {
        // console.log('I = J')
        newRow[i] = originalM[i][j];
      }
    }
    rotatedMatrix[j] = [...newRow.reverse()];
  }

  return rotatedMatrix;
}

// Function that allows to rotate matrix by user-defined 'n' times
function rotateMatrixNtimes(m,n) {
  
  // Make copy for further use
  let originalM = [...m];

  // Rotate Matrix
  for (let i = 0; i < n; i++) {
    m = rotateMatrix(m);
  }

  // Fill diagonals
  for (let i = 0, j = m[0].length - 1; i < m[0].length; i++) {
    m[i][i] = originalM[i][i];
    m[i][j] = originalM[i][j];
    j--;
  }

  return m;
} 

const mockMatrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log('Original matrix:',mockMatrix);
console.log('1 rotation:',rotateMatrixNtimes(mockMatrix,1));
console.log('2 rotations:',rotateMatrixNtimes(mockMatrix,2));
console.log('3 rotations:',rotateMatrixNtimes(mockMatrix,3));
console.log('4 rotations:',rotateMatrixNtimes(mockMatrix,4));

module.exports = rotateMatrixNtimes;