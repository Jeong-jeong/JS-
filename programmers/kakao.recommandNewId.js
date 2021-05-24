function solution(new_id) {
	let regExp = /[^a-z0-9-_.]/g;
	let del = new_id.toLowerCase().
	replace(regExp, '').split('');
	let p = 0;
	while (p <= del.length - 1) {
			if (del[p] === '.' && del[p + 1] === '.') {
					del.splice(p, 1);
			} else p++;
	}
	if (del[0] === '.') del.shift();
	if (del[del.length - 1] === '.') {
			del.pop();
	}
	if (!del.length) del.push('a');
	if (del.length >= 16) {
			del.splice(15);
			if (del[del.length -1] === '.') del.pop(); 
	};
	if (del.length <= 2) {
			while (del.length !== 3) {
					del.push(del[del.length - 1])
			}
	}
	return del.join('')
}

const new_id = '...!@BaT#*..y.abcdefghijklm';
console.log(solution(new_id));