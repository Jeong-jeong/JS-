function solution(n) {
	let sqrt = Math.sqrt(n);
	if ( sqrt === parseInt(sqrt)) return Math.pow(sqrt + 1, 2);
	else return -1;
}

const n = 121;
console.log(solution(n));