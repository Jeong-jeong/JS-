// 프로그래머스 1단계 두 정수 사이의 합

function solution (a, b) {
	let sum = 0;
	if (a < b) {
			while ( a <= b) {
					sum += a;
					a++;
			}
	} else if ( a > b) {
			while ( a >= b) {
					sum += a;
					a--;
			}
	} else sum = a;
 
	return sum;
}