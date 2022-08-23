function superEggDrop(k: number, n: number): number {
    let dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(n));
    for (let i = 0; i <= n; i++) {
        dp[1][i] = i;
    }
    for (let i = 0; i <= k; i++) {
        dp[i][0] = 0;
        dp[i][1] = 1;
    }
    for (let i = 2; i <= k; i++) {
        for (let j = 2; j <= n; j++) {
            let start = 2; let end = j;
            let pos = start;
            while (start <= end) {
                let mid = Math.floor((start + end) / 2);                
                if (dp[i - 1][mid - 1] >= dp[i][j - mid]) {
                    pos = mid;
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
            dp[i][j] = Math.min(dp[i][j], Math.max(dp[i - 1][pos - 1] + 1, dp[i][j - pos] + 1));
        }

    }
    return dp[k][n];
};



function superEggDrop(k: number, n: number): number {
    let result = 1;
    let dp = Array.from({ length: k + 1 }, () => Array(0));
    for (let i = 1; i <= k; i++) {
        dp[i][1] = 1;
    }
    for (let i = 0; i <= n; i++) {
        dp[1][i] = i;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= k; j++) {
            dp[j][i] = dp[j - 1][i - 1] + dp[j][i - 1] + 1;
        }
        if (dp[k][i] >= n) {
            result = i;
            break;
        }
    }
    return result;
};
