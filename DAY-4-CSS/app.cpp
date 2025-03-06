
// Fibonacci Sequence Using DP

// 1. Without DP (Recursive)

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

    Time Complexity: O(2ⁿ)
    Disadvantage: Recomputes the same values multiple times, leading to inefficiency.

// 2. With DP (Memoization - Top-Down)

def fibonacci_memo(n, memo={}):
    if n <= 1:
        return n
    if n not in memo:
        memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

    Time Complexity: O(n)
    Advantage: Avoids redundant calculations by storing previously computed values in memo.

// 3. With DP (Tabulation - Bottom-Up)

def fibonacci_tab(n):
    dp = [0] * (n+1)
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

    Time Complexity: O(n)
    Advantage: Uses iteration and fills the table from the base cases up to the desired value.