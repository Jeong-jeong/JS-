// 프로그래머스 1단계; 정수 내림차순 배치
function solution(n) {
	return +(n.toString().split('').sort( (a, b) => Number(b) - Number(a) ).join(''))
}