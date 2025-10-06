/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=0
    let minPrice=Infinity
  for(let i=0;i<prices.length;i++){
  
     if(prices[i]-minPrice>maxProfit){
        
        maxProfit=prices[i]-minPrice
     }else if(prices[i]<minPrice){
        minPrice=prices[i]

     }
  }
console.log("jdj",maxProfit)

return maxProfit
};