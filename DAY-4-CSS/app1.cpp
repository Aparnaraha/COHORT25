
    D[source] = 0  // Distance to the source node is 0

    For stage = n - 2 down to 0:  // Start from the second last stage to the first stage
        For each node u in stage:  // Iterate through each node in the current stage
            min_distance = infinity
            For each (neighbor, weight) in edges[stage][u]:  // For each outgoing edge from node u
                min_distance = min(min_distance, D[neighbor] + weight)    //Calculate the shortest path
            D[u] = min_distance  // Update the shortest distance for node u

    Return D[destination]  // Return the shortest distance to the destination node
