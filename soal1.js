var price = 10000

function returnPrice(x){
        for(var i = 1; i <= x; i++){
            if(i%4 == 0){
                var plusone = price*0.1
                Math.ceil(price += plusone)
            }else if(i%1 == 0){
                var plusfour = price*0.2
                Math.ceil(price += plusfour)
            }
        }
        if(price < 30000000){
            console.log(`menit ke ${i-1} harga ${Math.ceil(price)}`)
        }else if(price > 30000000){
            console.log(`menit ke ${i-1} barang sudah terjual`)
        }
        
    }


console.log(returnPrice(49))