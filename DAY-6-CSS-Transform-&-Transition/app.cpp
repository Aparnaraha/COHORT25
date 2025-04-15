
function knapsack(i, currentWeight, currentProfit):
    if currentWeight > capacity:
        return
    if i == totalItems:
        update maxProfit if currentProfit > maxProfit
        return
    // Include current item
    knapsack(i+1, currentWeight + weight[i], currentProfit + profit[i])
    // Exclude current item
    knapsack(i+1, currentWeight, currentProfit)