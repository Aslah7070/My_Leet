/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //way one
//  if(s.length!==t.length)return false
// if( s.split("").sort().join("")===t.split("").sort().join("")){
//     return true 
// }
// return false

//way two------------
 if(s.length!==t.length)return false
 const map=new Map()

for(let x of s){
    map.set(x,(map.get(x)||0)+1)

}
console.log(map)
for(let x of t){
    if(!map.has(x))return false
    map.set(x,(map.get(x)||0)-1)
    if(map.get(x)<0)return false

}


return true
};