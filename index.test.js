const rotateMatrix = require('./index');
const mockMatrix = [[4,21,4,1,3],[12,54,32,32,2],[1,3,5,12,26],[87,4,3,9,8],[1,4,23,41,3]];
const mockMatrix2 = [[1,2],[3,4]];

test("Returns correctly rotated matrix", () => {
    expect(rotateMatrix(mockMatrix2, 4)).toBe(mockMatrix2);
});