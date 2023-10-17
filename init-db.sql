-- Create a PostgreSQL database
CREATE DATABASE luxo_task_db_compose;

-- Connect to the newly created database
\c luxo_task_db_compose;

-- Create a table named 'ads'
CREATE TABLE ads (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  image_url TEXT
);

-- Insert data from the JSON file
COPY ads (title, location, image_url) FROM '/app/public/ads.json' DELIMITER ',' CSV HEADER;
