function solution(numbers) {
    let answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        
        for (let j = i + 1; j < numbers.length; j++) {
            
            let result = numbers[i] + numbers[j];

            if (answer.indexOf(result) === -1) {
                answer.push(result);
            }
        }
    }
    return answer.sort( (a, b) => a - b );
}