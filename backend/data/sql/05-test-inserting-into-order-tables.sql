INSERT INTO orders (
  id,
  total,
  customer_name,
  email,
  street,
  postal_code,
  city
) VALUES (
  'e5f9b43c-d210-404b-bb1c-d9dbfb3c405e',
  160,
  'TestName',
  'test@test.com',
  'TestStreet',
  '123456',
  'TestCity'
);

INSERT INTO ordered_items (
  order_id,
  model_id,
  color_name,
  size_abbr,
  amount,
  title,
  price
) VALUES (
  'e5f9b43c-d210-404b-bb1c-d9dbfb3c405e',
  5,
  'navy',
  'S',
  1,
  'Jacket',
  160
);
