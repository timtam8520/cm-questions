SELECT YEAR(OrderDate) AS year, MONTH(OrderDate) AS month, SUM(NumberOfUnits * CostOfUnit) AS totalAmount
FROM Orders
GROUP BY year, month DESC
