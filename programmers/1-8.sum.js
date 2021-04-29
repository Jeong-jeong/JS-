function solution(n) {
    let answer = 0;
    let str = String(n);
    for (let item of str) {
        answer += +item
    }
    return answer;
}