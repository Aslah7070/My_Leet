/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let x of s){
        if(s.indexOf(x)==s.lastIndexOf(x))return s.indexOf(x)
    }
    return -1
};