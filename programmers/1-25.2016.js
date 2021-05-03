function solution (a, b) {
	let date = new Date(2016, `${a - 1}`, `${b}`);
	let day = date.getDay();
	return getDay(day);
	
			
	
	function getDay(n) {
			if (n === 0) return 'SUN';
			else if (n === 1) return 'MON';
			else if (n === 2) return 'TUE';
			else if (n === 3) return 'WED';
			else if (n === 4) return 'THU';
			else if (n === 5) return 'FRI';
			else if (n === 6) return 'SAT';
	}
}