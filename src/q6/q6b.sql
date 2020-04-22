CREATE TABLE BigOrders
SELECT c.CustomerID, SUM(o.NumberOfUnits * o.CostOfUnit) as TotalOrderValue
FROM Customer as c
    INNER JOIN Orders as o
    ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerID
HAVING TotalOrderValue > 1000
