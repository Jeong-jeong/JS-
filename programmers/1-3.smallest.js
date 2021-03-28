// 가장 작은 수 출력하기
function solution(arr) {
    let answer = arr;
    let min = Math.min(...arr);
    (answer.length <= 1) ? answer = [-1] :
    answer.splice(answer.indexOf(min), 1);
    
    return answer;
}