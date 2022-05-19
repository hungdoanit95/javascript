// Hàm tính tổng
const _arr = [1,2,3];
const sumFor = (numberList) => {
    let sum = 0;
    // var length = numberList.length;
    // for (let i = 0; i < length; i++){
    //     sum += numberList[i];
    // }
    for (let number of numberList){
        sum += number;
    }
    return sum;
}
// console.log(sumFor(_arr));

// Hàm reduce
const sumReduce = (_arr) => {
    let sum = 0;
    return sum = _arr.reduce((total,number)=>{
        return total += number;
    },0);
}
console.log(sumReduce(_arr));