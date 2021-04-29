// 완전탐색 : 모의고사
function solution(answers) {
	const answer = [];
	const su1 = [1, 2, 3, 4, 5];
	const su2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const su3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
	
	const su1Ans = cntAns (su1);
	const su2Ans = cntAns (su2);
	const su3Ans = cntAns (su3);
	const supos = [su1Ans, su2Ans, su3Ans];
	const max = Math.max(su1Ans, su2Ans, su3Ans);
	
	for (let i = 0; i < 3; i++) {
			if (supos[i] === max) answer.push(i + 1)
	}
	return answer;
	
	
	function cntAns (supo) {
			return answers.filter((x, i) => x === supo[i % supo.length]).length;
	}
}