/* 56. Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], merge all
overlapping intervals, and return an array of the non-overlapping intervals
that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

/* NEED TO UPDATE LOGIC: intervals aren't in  */
var merge = function(intervals) {
    // Iterate over each interval pair
    let returnIntervals = [];
    for (let i = 0; i < intervals.length; i++) {
        // Keep going while intervals overlap, don't just compare 2
        let start = intervals[i][0];
        let end = intervals[i][1];
        // Overlap: Dependent on intervals[i + 1][0]
        // intervals[i + 1][0] is less than var end
        while (intervals[i + 1] && intervals[i + 1][0] <= end) {
            if (intervals[i + 1][0] < start) {
                start = intervals[i + 1][0];
            };
            i++;
            end = intervals[i][1];
        };
        returnIntervals.push([start, end]);
    };
    return returnIntervals;
};

//merge([[1,3],[2,6],[8,10],[15,18]]); // output: [[1,6],[8,10],[15,18]]
//merge([[1,4],[4,5]]); // output: [[1,5]]
//merge([[1,3],[2,6],[1,10]]) // output: [[1,10]]
//merge([[1,4],[0,4]]) // output: [[0,4]]
merge([[1,4],[0,1]]) // output: [[0,4]]
