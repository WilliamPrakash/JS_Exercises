// Write a function to find the longest common prefix
// amongst an array of strings
// input: ['flower','flow']     output: 'fl'

lcp(['abc','abd','abe'])

function lcp(list) {
    if (list.length == 0) return "empty list given"
    if (list.length == 1) return list[0]
    let prefix = ''
    // outer loop iterates through chars
    for(i = 0; i < list[0].length; i++) {
        let charToCompare = list[0].charAt(i)
        let allEqual = true
        // inner loop iterates through list starting after first one
        for(j = 1; j < list.length; j++) {
            if(charToCompare !== list[j].charAt(i)) {
                allEqual = false
                break
            }
        }
        if(allEqual == true) {
            prefix += charToCompare
        } else {
            break
        }
    }
    console.log(prefix)
    return prefix
}