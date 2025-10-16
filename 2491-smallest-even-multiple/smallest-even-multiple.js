/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
            
            while(n){
                if(n%2==0){
                    return n
                }
                n*=2
            }
};