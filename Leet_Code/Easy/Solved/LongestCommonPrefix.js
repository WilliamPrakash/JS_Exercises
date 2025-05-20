// Write a function to find the longest common prefix
// amongst an array of strings

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""

function longestCommonPrefix(strs) {
    
    let prefix = ''
    // Use first string for comparison
    for(let i = 0; i < strs[0].length; i++) {
        // strs[0] = flower
        // strs[0][1] = f
        //console.log(strs[0][i])

        var equal = true;
        // check the same index character 
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] != strs[j][i]) {
                equal = false
                i = strs[0].length
            }
        }

        if(equal) {
            prefix += strs[0][i]
        }

        //console.log(equal)
    }
    return prefix
    //console.log(prefix)
}

let strs = ['flower','flow','flight']
longestCommonPrefix(strs) // output: 'fl'

strs = ["dog","racecar","car"]
longestCommonPrefix(strs) // output: ''
