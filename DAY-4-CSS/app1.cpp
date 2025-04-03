Function MultistageGraph(n, edges, source, destination):
    Create an array D[n]  // Array to store the shortest distance from the source to each node
    
    For i = 0 to n - 1:
        D[i] = infinity  // Initialize all distances to infinity
    
    D[source] = 0  // Distance to the source node is 0


