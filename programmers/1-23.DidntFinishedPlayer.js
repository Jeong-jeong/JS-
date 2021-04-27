function solution(participant, completion) {
	let pH = new Map();
	for (let player of participant) {
			(pH.has(player)) ?
			pH.set(player, pH.get(player) + 1) :
			pH.set(player, 1)
	}
	
	for (let player of completion) {
			pH.set(player, pH.get(player) - 1);
	}
	
	for (let [key, val] of pH) {
			if (val !== 0) return key
	}
}