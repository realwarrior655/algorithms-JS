const maxProfit = (prices) => {
    if (prices.length < 2) return 0;

    let minPrice = prices[0]; // Initialize the minimum price to the first element and the we'll apdate it as we go
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        const currentPrice = prices[i];

        minPrice = Math.min(minPrice, currentPrice); // Update the minimum price if the current price is lower
        const profit = currentPrice - minPrice; // Calculate the profit if we sell at the current price
        maxProfit = Math.max(maxProfit, profit); // Update the maximum profit if the current
    }

    return maxProfit;
}