Function Knapsack(weights[], values[], W, n):
    Create 2D array dp[n+1][W+1]

    For i = 0 to n:
        For w = 0 to W:
            If i == 0 or w == 0:
                dp[i][w] = 0
            Else If weight[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], values[i-1] + dp[i-1][w - weights[i-1]])
            Else:
                dp[i][w] = dp[i-1][w]

    Return dp[n][W]