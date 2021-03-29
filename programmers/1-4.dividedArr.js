// 나누어 떨어지는 숫자배열 

function solution(arr, divisor) {
    let answer = [];
    answer = arr.filter( item => item % divisor === 0 );
    return (answer.length) ? answer.sort( (a, b) => a - b) : [-1];
}