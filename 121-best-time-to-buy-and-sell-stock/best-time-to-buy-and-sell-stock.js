/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let miniPrice=Infinity
    let maxPrice=0
    for(let x of prices){
        if(x<miniPrice){
            miniPrice=x
        } else {


           maxPrice= Math.max(maxPrice,x-miniPrice)
        }
       
    }
     console.log(maxPrice)
        console.log(miniPrice)
    return maxPrice
    

};