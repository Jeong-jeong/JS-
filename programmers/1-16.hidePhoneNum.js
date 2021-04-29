function solution(n) {
    return '*'.repeat(n.length - 4) + n.slice(-4)
}