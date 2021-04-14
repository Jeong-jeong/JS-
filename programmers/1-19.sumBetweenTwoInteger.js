// 프로그래머스 1단계 두 정수 사이의 합

function adder(a, b){
	let result = (a < b) ? a : b; // a < b 이면 return a 아니면 b
	while (a != b) { // a와 b가 같을 때까지 반복
		result += (a < b) ? ++a : ++b;
		// return에 a나 b가 있는 상태에서 작을경우 a를 1씩 증가하며 누적 아니면 b를 누적
	}    
	return result;
}