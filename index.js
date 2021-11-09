function rotateMatrix(m) {
  let originalM = [...m];
  let size = m[0].length;
  let newM = [];
  const zeroArray = [];

  while (zeroArray.length !== size) {
    zeroArray.push(new Array(size).fill(0));
  }

  for (let j = 0; j < size; j++) {
    let newRow = [];
    for (let i = 0; i < size; i++) {
      newRow.push(m[i][j]);
      if (i === j) {
        // console.log('I = J')
        newRow[i] = originalM[i][j];
      }
    }
    newM[j] = [...newRow.reverse()];
  }

  m = [...newM];

  

  return m;
}

function rotateMatrixNtimes(m,n) {
  for (let i = 0; i < n; i++) {
    m = rotateMatrix(m);
  }

  return m;
} 

const mockMatrix2 = [[4,21,4,1,3],[12,54,32,32,2],[1,3,5,12,26],[87,4,3,9,8],[1,4,23,41,3]];
const mockMatrix = [[1,2],[3,4]];

console.log('Original matrix:',mockMatrix);
console.log('1 rotation:',rotateMatrixNtimes(mockMatrix,1));
console.log('2 rotations:',rotateMatrixNtimes(mockMatrix,2));
console.log('3 rotations:',rotateMatrixNtimes(mockMatrix,3));
console.log('4 rotations:',rotateMatrixNtimes(mockMatrix,4));

module.exports = rotateMatrix;