// 최대 공약수 최소 공배수 구하기
// 더 배워서 다음에 리팩토링 해보자...🥲

function solution(n, m) {
    let answer = [];
    let greatest = Math.max.apply( null , (aliquot(n).filter( item => aliquot(m).includes(item) )));
    let least = multiple(n).find( item => multiple(m).includes(item) );
    answer.push(greatest, least);
    
    
    function aliquot (num) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            (num % i === 0) && arr.push(num / i)
        }
    return arr.sort((a,b) => a - b );
    }
    
    function multiple (num) {
        let arr = [];
            for (let i = 1; i <= Math.floor(1000000 / num); i++) {
                arr.push(num * i)
            }
        return arr;
    }
    return answer;
}