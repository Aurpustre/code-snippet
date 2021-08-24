function main(m: number, nums: any) {
    let result = 0;
    const n = nums[0].length;
  
    const dp: any = Array.from({ length: m }, () =>
      Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))
    );
  
    const dp1 = Array.from({ length: m }, () => Array(n + 1).fill(0));
    const dp2 = Array.from({ length: m }, () => Array(n + 1).fill(0));
  
  
    dp1[0][0] = nums[0][0];
    dp2[0][n - 1] = nums[0][n - 1];
  
    for (let k = 1; k < m; k++) {
      for (let a = 0; a < Math.min(n, k+1); a++) {
        for (let b = Math.max(0, n-k-1); b < n; b++) {
          if (!dp1[k - 1][a - 1]) dp1[k - 1][a - 1] = 0;
          if (!dp2[k - 1][b - 1]) dp2[k - 1][b - 1] = 0;
  
          if (b - a === 1) {
            dp1[k][a] = dp1[k - 1][a] + nums[k][a];
            dp2[k][b] = Math.max(dp2[k - 1][b], dp2[k - 1][b + 1]) + nums[k][b];
  
            let t1 = dp1[k - 1][a - 1] + nums[k][a];
            let t2 = Math.max(dp2[k - 1][b - 1], dp2[k - 1][b], dp2[k - 1][b + 1]) + nums[k][b];
  
            if (t1 + t2 > dp1[k][a] + dp2[k][b]) {
              dp1[k][a] = t1;
              dp2[k][b] = t2;
            }
  
            t1 = dp1[k - 1][a + 1] + nums[k][a];
            t2 = dp2[k - 1][b + 1] + nums[k][b];
  
            if (t1 + t2 > dp1[k][a] + dp2[k][b]) {
              dp1[k][a] = t1;
              dp2[k][b] = t2;
            }
  
            dp[k][a][b] = dp1[k][a] + dp2[k][b];
          } else if (b - a === 2) {
            let t1 = Math.max(dp1[k - 1][a - 1], dp1[k - 1][a], dp1[k - 1][a + 1]) + nums[k][a];
            let t2 = Math.max(dp2[k - 1][b], dp2[k - 1][b + 1]) + nums[k][b];
  
            let t3 = Math.max(dp1[k - 1][a - 1], dp1[k - 1][a]) + nums[k][a];
            let t4 = Math.max(dp2[k - 1][b - 1], dp2[k - 1][b], dp2[k - 1][b + 1]) + nums[k][b];
  
            if (t1 + t2 > t3 + t4) {
              dp1[k][a] = t1;
              dp2[k][b] = t2;
            } else {
              dp1[k][a] = t3;
              dp2[k][b] = t4;
            }
            dp[k][a][b] = dp1[k][a] + dp2[k][b];
          } else if (b - a > 2) {
            dp1[k][a] = Math.max(dp1[k - 1][a - 1], dp1[k - 1][a], dp1[k - 1][a + 1]) + nums[k][a];
            dp2[k][b] = Math.max(dp2[k - 1][b - 1], dp2[k - 1][b], dp2[k - 1][b + 1]) + nums[k][b];
            dp[k][a][b] = dp1[k][a] + dp2[k][b];
          }
        }
      }
    }
  
    const res = dp[m - 1];
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[0].length; j++) {
        result = Math.max(result, res[i][j]);
      }
    }
  
    console.log(result);
  }
  
