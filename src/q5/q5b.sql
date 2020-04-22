SELECT Name
FROM Salesperson
WHERE SalespersonID NOT IN (
  SELECT s.SalespersonID
	FROM Salesperson s
    	INNER JOIN Orders AS o
    	ON s.SalespersonID = o.SalespersonID
	WHERE o.CustomerID = 4
)
