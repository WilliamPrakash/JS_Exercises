/* 56. Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], merge ALL
overlapping intervals, and return an array of the non-overlapping intervals
that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

"use strict";

var merge = function(intervals) {
    let returnIntervals = [];

    // Order intervals in ascending order (first num of interval)
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Remove each interval for comparison
    while (intervals.length > 0) {
        let interval = intervals.shift();
        let first = interval[0];
        let last = interval[1];
        let overlappingIntervals = [];

        // Check for overlap with the rest of the intervals
        for (let i = 0; i < intervals.length; i++) {
            /* MAKE SURE TO REMOVE ANY OVERLAPPING INTERVAL FROM "intervals" ARRAY */
            if (intervals[i][0] >= first && intervals[i][0] <= last || intervals[i][1] >= first && intervals[i][1] <= last) {
                overlappingIntervals.push(intervals[i]);
                intervals.splice(i,1);
            };
        };
        console.log(overlappingIntervals);

        // Combine overlapping intervals
        if (overlappingIntervals.length > 0) {
            let least = interval[0];
            let greatest = interval[1];
            for (let i = 0; i < overlappingIntervals.length; i++) {
                if (overlappingIntervals[i][0] < least) {
                    least = overlappingIntervals[i][0];
                }
                else if (overlappingIntervals[i][1] > greatest) {
                    greatest = overlappingIntervals[i][1];
                }
            };
            returnIntervals.push([least, greatest]);
        }
        else {
            returnIntervals.push(interval);
        }
    }

    console.log(returnIntervals);
    return returnIntervals;
};

//merge([[1,3],[2,6],[8,10],[15,18]]); // output: [[1,6],[8,10],[15,18]]
merge([[1,4],[0,2],[3,5]]); // output: [[0,5]]
//merge([[1,4],[4,5]]); // output: [[1,5]]
//merge([[1,3],[2,6],[1,10]]) // output: [[1,10]]
//merge([[1,4],[0,4]]) // output: [[0,4]]
//merge([[1,4],[0,1]]) // output: [[0,4]]

// Second version
/*let returnIntervals = [];
    // Compare each interval to all others
    for (let i = 0; i < intervals.length; i++) {
        // 
        let front = intervals[i][0];
        let back = intervals[i][1];
        let overlappingIntervals = [ intervals[i] ]; // The interval we're comparing should be in here
        for (let j = 0; j < intervals.length; j++) {
            // Don't compare the same interval
            i == j ? j++ : null;

            // Check for overlap
            if (intervals[j][0] >= front && intervals[j][1] <= back || intervals[j][1] >= front ) {
                // Should I combine the intervals right here?
                // Or should I put them into an interval array and then combine?
                overlappingIntervals.push(intervals[j]);
            }

        };
    };*/