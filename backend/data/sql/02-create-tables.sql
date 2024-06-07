CREATE TABLE models (
  id INT PRIMARY KEY AUTO_INCREMENT, -- MySQL
  -- id SERIAL PRIMARY KEY, -- Postgresql
  title VARCHAR(300) NOT NULL,
  price NUMERIC(7,2) NOT NULL,
  description TEXT,
  image_filename_start VARCHAR(200) NOT NULL,
  large_card BOOLEAN DEFAULT FALSE
);

CREATE TABLE colors (
  id INT PRIMARY KEY AUTO_INCREMENT, -- MySQL
  -- id SERIAL PRIMARY KEY, -- Postgresql
  name VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE sizes (
  abbr VARCHAR(10) PRIMARY KEY,
  expansion VARCHAR(30) NOT NULL
);

CREATE TABLE models_colors (
  model_id INT, -- MySQL
  FOREIGN KEY (model_id) REFERENCES models (id) ON UPDATE CASCADE ON DELETE CASCADE, -- MySQL
  -- model_id INT REFERENCES models ON UPDATE CASCADE ON DELETE CASCADE, -- Postgresql
  color_id INT, -- MySQL
  FOREIGN KEY (color_id) REFERENCES colors (id) ON UPDATE CASCADE ON DELETE CASCADE, -- MySQL
  -- color_id INT REFERENCES colors ON UPDATE CASCADE ON DELETE CASCADE, -- Postgresql
  PRIMARY KEY (model_id, color_id)
);

CREATE TABLE orders (
  id VARCHAR(200) PRIMARY KEY,
  date_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total NUMERIC(10,2) NOT NULL,
  customer_name VARCHAR(300) NOT NULL,
  email VARCHAR(300) NOT NULL,
  street VARCHAR(300) NOT NULL,
  postal_code VARCHAR(6) NOT NULL,
  city VARCHAR(300) NOT NULL
);

CREATE TABLE ordered_items (
  order_id VARCHAR(200), -- MySQL
  FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE, -- MySQL
  -- order_id VARCHAR(200) REFERENCES orders ON DELETE CASCADE, -- Postgresql
  model_id INT, -- MySQL
  FOREIGN KEY (model_id) REFERENCES models (id) ON UPDATE CASCADE ON DELETE RESTRICT, -- MySQL
  -- model_id INT REFERENCES models ON UPDATE CASCADE ON DELETE RESTRICT, -- Postgresql
  color_name VARCHAR(200), -- MySQL
  FOREIGN KEY (color_name) REFERENCES colors (name) ON UPDATE CASCADE ON DELETE RESTRICT, -- MySQL
  -- color_name VARCHAR(200) REFERENCES colors (name) ON UPDATE CASCADE ON DELETE RESTRICT, -- Postgresql
  size_abbr VARCHAR(10), -- MySQL
  FOREIGN KEY (size_abbr) REFERENCES sizes (abbr) ON DELETE RESTRICT, -- MySQL
  -- size_abbr VARCHAR(10) REFERENCES sizes (abbr) ON DELETE RESTRICT, -- Postgresql
  PRIMARY KEY (order_id, model_id, color_name, size_abbr),
  amount INT NOT NULL,
  title VARCHAR(300) NOT NULL,
  price NUMERIC(7,2) NOT NULL
);
