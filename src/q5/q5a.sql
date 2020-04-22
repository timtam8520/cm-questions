SELECT Name
FROM Salesperson
    INNER JOIN Orders 
    ON Salesperson.SalespersonID = Orders.SalespersonID
WHERE Orders.CustomerID = 4
