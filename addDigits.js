let add = 0 ;

function addDigits(x){
    while(x!=0){
    let digit = x% 10;
    add =add + digit;
    x = parseInt(x/10);
    }

    console.log(add)
}

addDigits(4566785);