// 문자열 다루기 기본
// 단어 하나하나 쪼갠 후 숫자인지 아닌지 판별
function solution(s) {
    let len = s.length;
    if ((len === 4) || (len === 6)) {
        return s.split('').every(c => !isNaN(c))    
    }
    return false;
}