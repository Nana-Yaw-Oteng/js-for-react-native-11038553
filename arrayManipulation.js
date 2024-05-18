function processArray(number){
    const newArray = [];
for(let arr of number ){
    if(number % 2 == 0){
        newArray.push(number * number);
    }
    else{
        newArray.push(pow(number,3));
    }
}
return newArray;
}
function processArray(number){
    const newArray = [];
for(let number of arr ){
    if(number % 2 == 0){
        newArray.push(pow(number,2));
    }
    else{
        newArray.push(pow(number,3));
    }
}
return newArray;
}
function formatArrayStrings(strings,newNum){
    const newString = [];
    for(let i=0; i<strings.length;i++){
        const str = strings[i];
        const num = newNum[i];

        if(num%2 == 0){
            newString.push(str.toUpperCase());
        }
        else{
            newString.push(str.toLowerCase());
        }
    }
    return newString;
}