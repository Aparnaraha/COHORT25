
#include<iostream>



int knapsack(int W, int weight[], int profit[], int n) {
    int dp[n+1][W+1];
    
    // Build the table in bottom-up manner
    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            if (i == 0 || w == 0)
                dp[i][w] = 0;
            else if (weight[i-1] <= w)
                dp[i][w] = max(profit[i-1] + dp[i-1][w-weight[i-1]], dp[i-1][w]);
            else
                dp[i][w] = dp[i-1][w];
        }
    }
    return dp[n][W];  // Maximum profit
}



// Structure to represent an item
struct Item {
    int profit, weight;
};

// Function to calculate profit-to-weight ratio
bool compare(Item a, Item b) {
    return (double)a.profit / a.weight > (double)b.profit / b.weight;
}

double fractionalKnapsack(int capacity, vector<Item>& items) {
    sort(items.begin(), items.end(), compare);
    
    double totalProfit = 0.0;  // Total profit accumulated in the knapsack
    int currentWeight = 0;
    
    for (auto& item : items) {
        if (currentWeight + item.weight <= capacity) {
            // Take the whole item
            currentWeight += item.weight;
            totalProfit += item.profit;
        } else {
            // Take the fraction of the item that fits
            int remainingWeight = capacity - currentWeight;
            totalProfit += item.profit * ((double)remainingWeight / item.weight);
            break;  // Knapsack is full
        }
    }    
    return totalProfit;  // Return the maximum profit
}
