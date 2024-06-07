-- SELECT
-- m.id,
-- m.title,
-- m.price,
-- m.large_card AS largeCard,
-- c.name AS color_name,
-- COUNT(c.name) OVER(PARTITION BY m.id)
-- FROM models AS m
-- INNER JOIN models_colors AS mc ON m.id = mc.model_id
-- INNER JOIN colors AS c ON mc.color_id = c.id
-- ORDER BY m.id;

SELECT
m.id,
m.title,
m.price,
m.large_card AS largeCard,
JSON_ARRAYAGG(c.name) AS availableColors
FROM models AS m
INNER JOIN models_colors AS mc ON m.id = mc.model_id
INNER JOIN colors AS c ON mc.color_id = c.id
GROUP BY m.id
ORDER BY m.id;
