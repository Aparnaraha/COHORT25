
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



bool compare(Item a, Item b) {
    return ((double)a.profit / a.weight) > ((double)b.profit / b.weight);
}

double fractionalKnapsack(int capacity, Item items[], int n) {
    sort(items, items + n, compare);  // Sort by profit-to-weight ratio

    double totalProfit = 0;
    
    for (int i = 0; i < n; i++) {
        if (capacity == 0) break;
        if (items[i].weight <= capacity) {
            totalProfit += items[i].profit;
            capacity -= items[i].weight;
        } else {
            totalProfit += items[i].profit * ((double)capacity / items[i].weight);
            break;
        }
    }
    return totalProfit;
}
