SELECT Name
FROM Salesperson
    INNER JOIN Orders
    ON Salesperson.SalespersonID = Orders.SalespersonID
GROUP BY Name
HAVING COUNT (Orders.OrderID) > 1
