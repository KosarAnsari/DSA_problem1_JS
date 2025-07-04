//Checksum Zero problem DSA

let array1 = [-5,-4,-3,-2,0,2,4,6,8];
function checkSum(){
    for( let number of array1){
        //console.log(number);
        for(let j = 1; j < array1.length; j++){
            if(number+array1[j] ===0){
                console.log(number,array1[j]);
            }
        }
    }
}
checkSum();