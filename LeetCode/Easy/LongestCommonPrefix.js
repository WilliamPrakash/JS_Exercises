// Write a function to find the longest common prefix
// amongst an array of strings



function longestCommonPrefix(list) {
    let len = list[0].length
    // get shortest str in list
    list.forEach(x => {
        if(len > x.length) len = x.length
    })

    let prefix = ''
    let prev = 0
    let charArray = 0
    //let charArray = []
    let i = 0
    while(i < len) {
        // put chars at same index position in array
        list.forEach(x => {
            charArray.push(x.charAt(i))
        })

        let check = charArray[0]
        for(let j = 1; j < charArray.length; j++){
            // BOOLEAN ARRAY?
            if(check == charArray[i]) {

            } else {

            }
        }
        //charCompare = []
        i++
    }
}

let strs = ['flower','flow','flight']
longestCommonPrefix(strs) // output: 'fl'

strs = ["dog","racecar","car"]
//longestCommonPrefix(strs) // output: ''
