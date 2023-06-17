let number = 0;
function digit (x){
    while (x!=0){
        let digit = x%10;
        number = number+1

        x = parseInt(x/10)
    }

    console.log(number);
}


digit(12345640);