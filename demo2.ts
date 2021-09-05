function main(input: number) {
  const dp: any = Array.from({ length: 3 }, () =>
    Array.from({ length: input + 1 }, (_, i) => i)
  );

  for (let i = 1; i <= input; i++) {
    for (let k = 1; k < i; k++) {
      dp[2][i] = Math.min(dp[2][i], Math.max(dp[2][i - k], dp[1][k - 1]) + 1);
    }
  }

  console.log(dp[2][input]);
}



//   const stdStr = std.toString().trim();
//   let args = 0;
//   args = Number(stdStr);


