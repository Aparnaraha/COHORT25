Function OptimalBST(keys[], freq[], n):
    Create 2D arrays cost[n][n] and root[n][n]

    For i = 0 to n-1:
        cost[i][i] = freq[i]  # Base case: only one key

    For length = 2 to n:
        For i = 0 to n - length:
            j = i + length - 1
            cost[i][j] = infinity
            For r = i to j:
                # Calculate cost of making keys[r] the root
                cost_left = (r > i) ? cost[i][r-1] : 0
                cost_right = (r < j) ? cost[r+1][j] : 0
                total_cost = cost_left + cost_right + sum(freq[i..j])  # Sum of frequencies

                If total_cost < cost[i][j]:
                    cost[i][j] = total_cost
                    root[i][j] = r

    Return cost[0][n-1]  # Minimum cost for the full range
