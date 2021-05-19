function convertfahrtocelsius(F)  {

let res = Object.prototype.toString.call(F);

if(res !== "[Object Number]" && !parseFloat(F)){
    let param = res.split(" ");
    param[1] = param[1].substring(0, param[1].length-1);
    return `${ JSON.stringify(F)} is not a valid number but a/an ${param[1]}`;
}

let C = ((F-32)*5/9).toFixed(4);

return C;
}

const checkYuGioh = (n) =>{
    let resArr =[];

    if(isNaN(n) || parseInt(n) < 1){
        console.log(`invalid parameter: ${n}`);
        return `invalid parameter: ${n}`;
    }

    for (let i = 1; i <= n; i++) {
        let current_string = [];
        let fstring = "";

        (i % 2 == 0) ? (current_string.push("yu")) : "";
        (i % 3 == 0) ? (current_string.push("gi")) : "";
        (i % 5 == 0) ? (current_string.push("oh")) : "";

        fstring = current_string.join("-");

        (fstring) ? (resArr.push(fstring)) : (resArr.push(i));
    }

    console.log(resArr);
    return resArr;
};