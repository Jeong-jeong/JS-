function solution(absolutes, signs) {
	for (let i = 0; i < signs.length; i++) {
			if (!signs[i]) absolutes[i] *= -1; 
	}
	
	return absolutes.reduce((pre, cur) => pre + cur, 0)
}

const absolutes = [4,7,12], signs = [true,false,true];
console.log(solution(absolutes, signs));