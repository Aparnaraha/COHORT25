#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Union-Find (Disjoint Set) class
class DisjointSet {
public:
    vector<int> parent, rank;

    DisjointSet(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; i++) parent[i] = i;
    }

    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);  // Path compression
        }
        return parent[x];
    }

    void unionSet(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX != rootY) {
            // Union by rank
            if (rank[rootX] > rank[rootY])
                parent[rootY] = rootX;
            else if (rank[rootX] < rank[rootY])
                parent[rootX] = rootY;
            else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
};

// Edge structure to store graph edges
struct Edge {
    int u, v, weight;
    bool operator<(const Edge &e) {
        return weight < e.weight;
    }
};

void kruskalMST(vector<Edge> &edges, int V) {
    DisjointSet ds(V); // Create disjoint set
    vector<Edge> mst;

    // Sort edges by weight
    sort(edges.begin(), edges.end());

    // Process each edge
    for (Edge edge : edges) {
        int u = edge.u, v = edge.v, w = edge.weight;

        // If u and v are not connected, add the edge
        if (ds.find(u) != ds.find(v)) {
            ds.unionSet(u, v);
            mst.push_back(edge);
        }
    }

    // Print the MST (edges and their weights)
    for (Edge e : mst) {
        cout << "Edge: " << e.u << " - " << e.v << " with weight: " << e.weight << endl;
    }
}

int main() {
    vector<Edge> edges = {
        {0, 1, 2}, {0, 3, 6}, {1, 2, 3}, {1, 3, 8}, {1, 4, 5},
        {2, 4, 7}, {3, 4, 9}
    };

    kruskalMST(edges, 5); // 5 is the number of vertices
    return 0;
}
