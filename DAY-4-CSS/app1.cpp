function FloydWarshall(graph):
    n = number of nodes in graph
    dist = matrix of size n x n

    // Step 1: Initialize the distance matrix
    for i = 1 to n:
        for j = 1 to n:
            if i == j:
                dist[i][j] = 0       // Distance from node to itself is 0
            else if there is an edge from i to j:
                dist[i][j] = weight of edge from i to j
            else:
                dist[i][j] = ∞       // No edge, set distance to infinity

    // Step 2: Update the distance matrix
    for k = 1 to n:              // For each intermediate node k
        for i = 1 to n:          // For each source node i
            for j = 1 to n:      // For each destination node j
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]  // Update the shortest distance

    return dist   // Return the matrix with the shortest distances between all pairs of nodes

