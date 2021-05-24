const solution = (new_id) => {
		const id = new_id
		// 소문자 치환
		.toLowerCase()
		// 알파벳 소문자, 숫자, (-), (_), (.) 제외 문자 제거
		.replace(/[^\w\d-_.]/g, '')
		// (.) 2회 이상 연속된 부분 하나의 (.)로 치환
		.replace(/\.{2,}/g, '.')
		// (.)가 처음이나 끝에 위치하면 제거
		.replace(/^\.|\.$/g, '')
		// []일 경우 'a' 대입
		.padEnd(1, 'a')
		// 16자 이상이면 15개 문자 제외 제거
		.slice(0, 15)
		// 제거 후 (.)가 끝에 위치 시 제거
		.replace(/\.$/g, '')
		// 길이가 2자 이하이면 마지막 문자 반복 (until 길이 = 3)
		return id.padEnd(3, id[id.length -1])
	}

const new_id = '...!@BaT#*..y.abcdefghijklm';
console.log(solution(new_id));