function solution(p, c) {
	p.sort()
	c.sort()
	while (p.length) {
			let pp = p.pop()
			if (pp !== c.pop()) return pp
	}
}