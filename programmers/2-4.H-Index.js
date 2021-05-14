function solution(citations) {
	let len = citations.length;
	citations.sort((a, b) => b - a);
	for (let i = 0; i < len; i++) {
			if (citations[i] === i + 1) {
					return i + 1;
			}
			else {
					if (citations[i] < i + 1) return i;
			}
	}
	return len;
}

let citations = [3, 0, 6, 1, 5]
console.log(solution(citations));