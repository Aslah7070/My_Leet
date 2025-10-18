/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const stack=[]
    const map={
        ")":"(",
        "}":"{",
        "]":"["
    }
    for(let x of s){
        console.log(x)
        if(x==="("||x==="{"||x==="["){
            stack.push(x)
        }else if(stack.length==0||stack.pop()!==map[x]){
            return false
        }
    }
    
    return stack.length===0
};