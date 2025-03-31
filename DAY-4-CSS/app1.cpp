Function TSP(dist[][], n):
    Create 2D array T[2^n][n]
    
    For i = 0 to 2^n - 1:
        For j = 0 to n - 1:
            T[i][j] = infinity  # Initialize all values to infinity

    T[1][0] = 0  # Starting at city 0 with only city 0 visited

    For visited_set = 1 to 2^n - 1:  # Iterate over all subsets of cities
        For u = 0 to n - 1:  # End city u in the current visited_set
            If (visited_set & (1 << u)) == 0:
                Continue  # Skip if city u is not in the visited_set

            For v = 0 to n - 1:  # Try to extend to city v
                If (visited_set & (1 << v)) != 0:
                    Continue  # Skip if city v is already visited

                new_visited_set = visited_set | (1 << v)
                T[new_visited_set][v] = min(T[new_visited_set][v], T[visited_set][u] + dist[u][v])

    min_cost = infinity
    For u = 1 to n - 1:
        min_cost = min(min_cost, T[2^n - 1][u] + dist[u][0])  # Return to the starting city

    Return min_cost
