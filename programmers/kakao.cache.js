// programmers [1차] 캐시

function solution(cacheSize, cities) {
	// 0 <= cacheSize  <= 30
	// cities = 대소문자 구분 없음
	// cache hit = 캐시에 존재할 경우 (1)
	// cache miss = 캐시에 존재하지 않을 때 (5)
	let city = cities.map (x => x.toLowerCase());
	let cache = [], answer = 0;
	for (let x of city) {
			if (cache.length < cacheSize) { // 캐시 사이즈 미도달
					if (cache.includes(x)) { // cache hit
							let idx = cache.indexOf(x);
							for (let i = idx; i < cache.length - 1; i++) {
									[[cache[i], cache[i + 1]] = [cache[i + 1], cache[i]]]
							}
							cache[cache.length - 1] = x;
							answer += 1;
					} else {
							answer += 5;
							cache.push(x);
					}
			} else { // 캐시 사이즈 도달
					if (cache.includes(x)) {
							let idx = cache.indexOf(x);
							for (let i = idx; i < cacheSize - 1; i++) {
									[[cache[i], cache[i + 1]] = [cache[i + 1], cache[i]]]
							}
							cache[cache.length - 1] = x;
							answer += 1;
					} // cache hit
					else {
							for (let i = 0; i < cacheSize - 1; i++) {
									[[cache[i], cache[i + 1]] = [cache[i + 1], cache[i]]]
							}
							cache[cache.length - 1] = x;
							answer += 5;
					}
			}
	}
	return answer;
}

const cacheSize = 5;, cities = ["Jeju", "Pangyo", "Jeju"];
console.log(solution(cacheSize, cities));