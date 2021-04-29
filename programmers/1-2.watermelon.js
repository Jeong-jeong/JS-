function solution(n) {
    return '수박'.repeat( (n/2)) + ((n % 2) ? '수' : ''); 
}

let n = 1;
console.log(solution(n));
