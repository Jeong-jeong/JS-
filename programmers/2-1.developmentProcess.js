// 기능개발 - Lev.2
function solution(progresses, speeds) {
	let stack = [], answer = [];
	for (let i = 0; i < progresses.length; i++) {
			stack.push(Math.ceil((100 - progresses[i]) / speeds[i]))
	}
	
	let count = 1;
	let big = stack[0];
	for (let i = 1; i < stack.length; i++) {
			if (big < stack[i]) {
					big = stack[i];
					answer.push(count);
					count = 1;
			} else {
					count++;
			}
	}
	answer.push(count)

	return answer;
}