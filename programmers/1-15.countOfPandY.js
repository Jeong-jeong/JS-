function solution(s){
    let arr = s.toLowerCase().split('');
    let pCount = 0, yCount = 0;
    for (let c of arr) {
        (c === 'p') && pCount++;
        (c === 'y') && yCount++;
    }
    return (pCount === yCount) ? true : false;
}