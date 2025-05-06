/* 48. Rotate Image
You are given an n x n 2D matrix representing an image, rotate the 
image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify
the input 2D matrix directly. DO NOT allocate another 2D matrix and
do the rotation.
*/

var rotate = function(matrix) {
    // Print formatted matrix:
    console.log(matrix[0][0] + "  " + matrix[0][1] + "  " + matrix[0][2] + "  " + matrix[0][3]);
    console.log(matrix[1][0] + "        " + matrix[1][3]);
    console.log(matrix[2][0] + "       " + matrix[2][3]);
    console.log(matrix[3][0] + " " + matrix[3][1] + " " + matrix[3][2] + " " + matrix[3][3]);

    // Define variables needed for the function
    let sideLength = matrix[0].length;
    let spacesToMove = sideLength - 1;
    let temp = matrix[0][1];

    // Rotate the top layer once
    let i = 0;
    while (i + 1 < spacesToMove) {
        //matrix[0][i + 1] = temp
        
        matrix[0][i + 1] = matrix[0][i];
        
        temp = matrix[0][i + 1];
        i++;
    };
    console.log();

    console.log(matrix[0]);
    console.log(matrix[1]);
    console.log(matrix[2]);
    console.log(matrix[3]);
    // Full loop of the outside
    /*console.log(matrix[0][0]);
    console.log(matrix[0][1]);
    console.log(matrix[0][2]);
    console.log(matrix[0][3]);
    console.log(matrix[1][3]);
    console.log(matrix[2][3]);
    console.log(matrix[3][3]);
    console.log(matrix[3][2]);
    console.log(matrix[3][1]);
    console.log(matrix[3][0]);
    console.log(matrix[2][0]);
    console.log(matrix[1][0]);*/
    // Visual aid of outer loop
    /*console.log(matrix[0][0] + "  " + matrix[0][1] + "  " + matrix[0][2] + "  " + matrix[0][3]);
    console.log(matrix[1][0] + "        " + matrix[1][3]);
    console.log(matrix[2][0] + "       " + matrix[2][3]);
    console.log(matrix[3][0] + " " + matrix[3][1] + " " + matrix[3][2] + " " + matrix[3][3]);*/
    console.log();
};

/*rotate([[1,2,3],
    [4,5,6],
    [7,8,9]]);*/
rotate([[5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]]);
