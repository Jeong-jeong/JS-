function solution(s) {
	let stack = [];
	let sArr = Array.from(s);
	while (sArr.length) {
			let pop = sArr.pop();
			if (stack[stack.length - 1] === pop) {
					stack.pop();
			} else stack.push(pop);
	}
	return (stack.length) ? 0 : 1;
}

const s = 'baabaa';
console.log(solution(s));
