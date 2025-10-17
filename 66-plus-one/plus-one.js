/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let arr=[]
let toSingle=BigInt(digits.join(""))
   toSingle+=1n
   const a= String(toSingle).split("")
        for(let i=0;i<a.length;i++){
            arr.push(Number(a[i]))
        }
    return arr
};