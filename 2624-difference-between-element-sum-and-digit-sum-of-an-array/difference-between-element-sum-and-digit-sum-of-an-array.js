/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elementSum=nums.reduce((acc,value)=>acc+value,0)
    const digits=nums.join("").split("")
    const digitsSum=digits.reduce((acc,value)=>acc+Number(value),0)
    console.log(digitsSum)
    return elementSum-digitsSum

    
};