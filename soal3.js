var coin = [25,10,5,1]

function coinCheck(num){
    output = 0
    for(var i = 0; i<coin.length; i++){
        if(num%25 === 0){
            output += 1
        }else if(num%10 === 0){
            output += 1
        }else if(num%5 === 0){
            output += 1
        }else if(num%1 === 0){
            output +=1
        }
    return output
    }
}

console.log(coinCheck(37))