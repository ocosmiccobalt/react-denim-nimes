-- INSERT INTO models (
--   title,
--   price,
--   image_filename_start,
--   large_card
-- ) VALUES
-- ('Jacket', 40, 'item-1', FALSE),
-- ('Jacket', 70, 'item-2', FALSE),
-- ('Jacket', 60, 'item-3', FALSE),
-- ('Jacket', 50, 'item-4', FALSE),
-- ('Jacket', 160, 'item-5-large', TRUE),
-- ('Jacket', 40, 'item-6', FALSE),
-- ('Jacket', 110, 'item-7', FALSE),
-- ('Jacket', 35, 'item-8', FALSE),
-- ('Jacket', 85, 'item-9', FALSE);

-- INSERT INTO colors (name)
-- VALUES
-- ('blue gray'),
-- ('navy'),
-- ('gray'),
-- ('coal'),
-- ('light gray'),
-- ('blue');

-- INSERT INTO sizes (abbr, expansion)
-- VALUES
-- ('XS', 'extra small'),
-- ('S', 'small'),
-- ('M', 'medium'),
-- ('L', 'large'),
-- ('XL', 'extra large');

INSERT INTO models_colors (model_id, color_id)
VALUES
(1, 5),
(1, 2),
(1, 6),
(2, 6),
(2, 5),
(2, 3),
(3, 3),
(3, 4),
(3, 1),
(4, 2),
(4, 4),
(4, 6),
(5, 2),
(5, 1),
(5, 6),
(6, 5),
(6, 6),
(6, 4),
(7, 3),
(7, 1),
(7, 2),
(8, 6),
(8, 4),
(8, 1),
(9, 2),
(9, 6),
(9, 3);
