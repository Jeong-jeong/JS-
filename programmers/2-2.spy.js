// 프로그래머스 위장 Lev. 2
function solution (clothes) {
	const countValue = clothes.reduce((arr, e) => {
			arr[e[1]] = arr[e[1]] ? arr[e[1]] + 1 : 1;
			return arr;
	}, {});
	
	let answer = 1;
	for (let x in countValue) {
			answer *= countValue[x] + 1;
	}
	
	return answer - 1;
}

const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));