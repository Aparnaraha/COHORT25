


MATRIX_CHAIN_ORDER(p)
  n = length(p) - 1  // Number of matrices
  Create table m[n][n] to store minimum multiplication costs
  Create table s[n][n] to store split points
  Initialize m[i][i] = 0 for all i (cost of single matrix is zero)
  for chain_length = 2 to n:   // Solve smaller problems first
      for i = 1 to n - chain_length + 1:
          j = i + chain_length - 1
          m[i][j] = ∞  // Initialize with large value
          for k = i to j - 1:  // Try all possible splits
             cost = m[i][k] + m[k+1][j] + (p[i-1] × p[k] × p[j])
             if cost < m[i][j]:
                 m[i][j] = cost  // Store the minimum cost
                 s[i][j] = k  // Store the best split position
  return m and s



