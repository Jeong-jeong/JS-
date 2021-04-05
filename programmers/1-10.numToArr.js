function solution(n) {
    let arr = String(n).
                split('').
                reverse().
                map(item => +item);
    return arr;
}