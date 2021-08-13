function getMaxExp(a: number, m: number, bonus: number[], exp: number[]) {
    let totalExp = a;
    for (let i = 0; i < m; i++) {
        let maxExpIndex = -1;
        for (let j = 0; j < exp.length; j++) {
            if (exp[j] < totalExp && (bonus[maxExpIndex] || 0) < bonus[j]) {
                maxExpIndex = j;
            }
        }
        totalExp += bonus[maxExpIndex];
        bonus.splice(maxExpIndex, 1);
        exp.splice(maxExpIndex, 1);
    }
    return totalExp;
}

const result = getMaxExp(2, 3, [2, 1, 3, 4], [0, 1, 1, 2]);
console.log(result);
