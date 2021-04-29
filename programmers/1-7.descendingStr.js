function solution(s) {
    let answer = '';
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s.charCodeAt(i))
        let asc = arr.sort((a,b) => b - a)
        let str = asc.map(item => String.fromCharCode(item))
        answer = str.join('')
        
    }
	return answer;
}