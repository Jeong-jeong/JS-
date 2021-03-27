function solution(n) {
    let answer = '';
    let handClap = '박수';
    if (n === 1) answer = '수';
    else if (n % 2 === 0) { // 짝수일 때
        answer = '수박'.repeat(n / 2); // '수박'을 입력값 4 / 2 만큼 반복 = 수박 * 2
    } else answer = '수' + handClap.repeat(Math.floor(n / 2))

    return answer;
}
