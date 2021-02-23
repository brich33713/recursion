function product(arr){
    if(arr.length === 0) return 1
    return arr[0] * product(arr.slice(1))
}

function longest(arr,maxlength = 0){
    if(arr.length === 0) return maxlength
    maxlength = (arr[0].length > maxlength) ? arr[0].length : maxlength
    return longest(arr.slice(1),maxlength)
}

function everyOther(str){
    if(str.length === 0) return ""
    return str[0] + everyOther(str.slice(2))
}

function isPalindrome(str){
    let string = (Array.isArray(str)) ? str : str.split("")
    if(string.length === 1) return true
    let first = string.shift()
    let last = string.pop()
    if(first !== last) return false
    return isPalindrome(string)
}

function findIndex(arr,param,count = 0){
    if(count > arr.length) return -1
    if(arr[count] === param) return count
    count++
    return findIndex(arr,param,count)
}

function revString(str){
    if(str.length === 0) return ""
    let string = (Array.isArray(str)) ? str : str.split("").reverse()
    return string[0] + revString(string.slice(1))
}

function gatherStrings(obj,arr = []){
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            arr.push(obj[key])
        } else if(typeof obj[key] === 'object'){
            arr.push(...gatherStrings(obj[key]))
        } 
    }

    return arr
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings
  };
