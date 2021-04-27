export default function deepClone(target){
    let result = Array.isArray(target) ? [] : {};
    for(let i in target){
        if(target.hasOwnProperty(i)){ 
            result[i] = typeof target[i] === "object" ? deepClone(target[i]) : target[i]; 
        } 
    }
    return result
}