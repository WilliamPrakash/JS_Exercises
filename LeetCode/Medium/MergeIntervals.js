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

    // Order intervals in ascending order (by first num of interval)
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Remove each interval for comparison
    while (intervals.length > 0) {
        let interval = intervals.shift();
        let first = interval[0];
        let last = interval[1];
        let overlappingInterval = [];
        //let previouslyOverlappedInterval = [];

        /* If we're looking at the last interval, ??? */
        
        // Check for overlap with the rest of the intervals
        for (let i = 0; i < intervals.length; i++) {
            // Overlap definitions:
            if (intervals[i][0] >= first && intervals[i][0] <= last || intervals[i][1] >= first && intervals[i][1] <= last) {
                overlappingInterval.push(intervals[i]);
                // Remove overlapping interval from original array to avoid reprocessing it
                intervals.splice(i, 1);
            };

            // If overlap, combine the comparing and overlapping intervals
            if (overlappingInterval.length > 0) {
                if (overlappingInterval[i][0] < first) {
                    first = overlappingInterval[i][0];
                }
                if (overlappingInterval[i][1] > last) {
                    last = overlappingInterval[i][1];
                }
                //returnIntervals.push([first, last]);
                // Check to see if we need to remove the last interval
                /*if (returnIntervals) {
                    
                };*/
                
                overlappingInterval = [];
                i--; // If we added an interval to overlappingIntervals, we also removed one from intervals. Don't move forward an index
            };
        };
        returnIntervals.push([first, last]);
    };
    return returnIntervals;
};

//merge([[1,3],[2,6],[8,10],[15,18]]); // output: [[1,6],[8,10],[15,18]]
merge([[1,4],[0,2],[3,5]]); // output: [[0,5]]
