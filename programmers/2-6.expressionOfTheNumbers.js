function sum (start, n) {
	let total = 0;
	while (total < n) {
			total += start++;
	}
	return total;
}

function solution(n) {
	let start = 1;
	let cnt = 0;
	while (start <= n) {
			if (sum(start, n) === n) {
					cnt++;
			};
			start++;
	}
	
	return cnt;
}

const n = 15;
console.log(solution(n));