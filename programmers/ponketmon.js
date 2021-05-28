function solution(nums) { // = 짝수 
	const set = new Set(nums);
	
	return (set.size > (nums.length/ 2)) ? 
					(nums.length / 2) : 
					set.size;
}

const nums = [3, 1 ,2, 3];
console.log(solution(nums));