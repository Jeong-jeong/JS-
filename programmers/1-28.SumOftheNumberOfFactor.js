// Programmers 약수의 개수와 덧셈
function count (n) {
	let cnt = 2;
	if (n === 1) return 1;
	else {
			for (let i = parseInt(n / 2); i > 1; i--) {
					if (n % i === 0) cnt++;
			}
	}
	return cnt;
}

function solution(left, right) {
	let answer = 0;
	for (let i = left; i <= right; i++) {
			if (count(i) % 2 === 0) {
					answer += i;
			} else {
					answer -= i;
			};
	}
	return answer;
}

const left = 13, right = 17;
console.log(solution(left, right));