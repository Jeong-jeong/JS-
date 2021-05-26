// programmers 이상한 문자 만들기
function solution(s) {
	let sUpper = s.toUpperCase().split('');
	let p = 0;
	for (let i = 0; i < sUpper.length; i++) {
			if (sUpper[i] === ' ') p = 0;
			else {
					p++;
					if (p % 2 === 0) {
						sUpper[i] = sUpper[i].toLowerCase();
					}
			}
	}
	return sUpper.join('')
}

const s = 	"sp   ace  bra"
console.log(solution(s));