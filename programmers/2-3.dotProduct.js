function solution(a, b) {
	return a.reduce((a, c, i) => {
			a.push(c * b[i]);
			return a;
	}, []). reduce((a, c) => a + c, 0)
}