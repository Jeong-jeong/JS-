// programmers lev 1
// k 번째 수
function solution(arr, commands) {
	let answer = [];
	for (let i = 0; i < commands.length; i++) {
			answer.push(...arr.slice(commands[i][0] - 1, commands[i][1])
									.sort((a, b) => a - b).
									splice(commands[i][2] - 1, 1)
									);
	}
	return answer;
}