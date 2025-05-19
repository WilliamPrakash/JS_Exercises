/* 48. Rotate Image
You are given an n x n 2D matrix representing an image, rotate the 
image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify
the input 2D matrix directly. DO NOT allocate another 2D matrix and
do the rotation. */

"use strict";

var rotate = function(matrix) {

    function printCurrentMatrixShape() {
        console.log(matrix[0][0] + "  " + matrix[0][1] + "  " + matrix[0][2] + "  " + matrix[0][3]);
        console.log(matrix[1][0] + "        " + matrix[1][3]);
        console.log(matrix[2][0] + "       " + matrix[2][3]);
        console.log(matrix[3][0] + " " + matrix[3][1] + " " + matrix[3][2] + " " + matrix[3][3]);
    }
    printCurrentMatrixShape();

    let sideLength = matrix[0].length;
    let spacesToMove = sideLength - 1;
    let temp = matrix[0][0]; // Temp needs to be set before first iteration, otherwise we lose the element @ matrix[0][i] where i is 0
    /* Do we need a second "temp" variable??? */

    /* Top layer iteration.
    Replace from the back. Current element gets put in a temp variable.
    By the end, 11 should be in temp.*/
    let i = 0;
    while (i + 1 < spacesToMove) {
        /* Optmimize by */
        if (i == 0) { // Take from below row on first iteration
            matrix[0][i] = matrix[1][0];
            i++;
            temp = matrix[0][i];
        } else {
            temp = matrix[0][i + 1];
            matrix[0][i] = matrix[0][i + 1];
            i++;
        }
    };
    printCurrentMatrixShape();

    console.log();
};

/*rotate([[1,2,3],
    [4,5,6],
    [7,8,9]]);*/
rotate([[5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]]);
