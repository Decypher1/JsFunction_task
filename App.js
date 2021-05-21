//-------------------------------------------Task1------------------------------------
function convertFahrToCelsius(F){
    let C = (F - 32) * 5 / 9;
    let Z = C.toFixed(4);
}

If (Array.isArray(F)) {
    return (`${JSON.stringify(F)} is not a valid number but  a/an ${"array"}`)
}
else if (typeof F === `object`) {
    return(`${JSON.stringify(F)} is not a valid number but a/an ${"object"}`)
}
else if (typeof F === `boolean`) {
    return (`${F} is not a valid number but a/an ${"boolean"}`)
}
else if (typeof F === `string` && isNaN(F)) {
    return (`${JSON.stringify(F)} is not a valid number but a/an ${"string"}`)
}
else {
    return Z;
}

const result = convertFahrToCelsius(0);
console.log(result.toFixed(4));

const result2 = convertFahrToCelsuis("0");
console.log(result2.toFixed(4));

/*function covertFahrToCelsuis(temp) {
    let itype=
    Object.prototype.toString.call(temp);
    if (type ==="[object Number]" || (itype === "[object String]" && !isNaN (temp))){
        return ((temp-32)* 5 / 9).toFixed(4);

    }
    else{
        return ${JSON.stringify(temp)} is not a valid number but a/an ${itype.substring(7,itype.length-1)};
    }
}

const result3 = convertFahrToCelsius([1,2,3]);
    return [1,2,3] ("is not a valid number but a/an array");
    console.log(result3.toFixed(4))

const result4 = convertFahrToCelsius(temp:0);
    return ("temp" : 0 "is not a valid number but an object");*/




//-------------------------------------------------Task2--------------------------------------------
function checkYuGiOh (n) {
    const array = [];
    const newArray = [];
    if ( condition to make 'n' a number)    {
        for (i=1; i < n; i++) {
            array.push(i)
        }
        for(i in array) {
            if (some conditions) {
                let str = "";
                if (array [i] % 2 === 0){
                    str += ("yu");
                }
                if (array [i] % 3 === 0){
                    str += ("gi");
                }

                if (array [i] % 5 === 0){
                    str += ("oh");
                }
                if (array [i] % 2 === 0 && [i] % 3 === 0){
                    str += ("yu-gi");
                }
                if (array [i] % 2 === 0 && [i] % 5 === 0){
                    str += ("yu-oh");
                }
                if (array [i] % 3 === 0 && [i] % 5 === 0){
                        str += ("gi-oh");
                newArray.push(str)
                

                } else {
                newArray.push(array[i])
            }
        }
    } else {
        console.log(`Invalid Parameter: ${JSON.stringify(n)}`)
        return(`Invalid Parameter: ${JSON.stringify(n)}`)
    }
    
}
console.log (newArray)
    return (newArray);
