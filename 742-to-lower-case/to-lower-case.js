/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    
    // return s.toLowerCase()

    let str="";
    for(let x of s){
        
        let code=x.charCodeAt()
        if(code>=65&&code<=90){
            console.log(x+"-"+code)
            str+=String.fromCharCode(code+32)
        }else{
            str+=x
        }


    }

    return str
};