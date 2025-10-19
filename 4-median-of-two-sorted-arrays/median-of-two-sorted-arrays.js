/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged=[...nums1,...nums2].sort((a,b)=>a-b)
    console.log(merged)
    let len=merged.length

        if(len%2===0){
        let middle=(merged[len/2-1]+merged[len/2])/2
        return middle
        }

       console.log(Math.floor(len/2))
       console.log(merged[2])
        return merged[Math.floor(len/2)]
    

};