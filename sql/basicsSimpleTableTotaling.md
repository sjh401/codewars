SELECT COALESCE(NULLIF(clan,''), '[no clan specified]') as clan, 
SUM(points) AS total_points, 
COUNT(name) AS total_people, 
ROW_NUMBER() OVER(ORDER BY SUM(points) DESC) AS rank 
from people GROUP BY clan