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