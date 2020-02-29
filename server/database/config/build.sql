BEGIN;
DROP TABLE IF EXISTS cities;
CREATE TABLE cities(
    id serial PRIMARY KEY ,
    user_n VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL
);
INSERT INTO cities(user_n,city) VALUES
('ali','gaza'),
('mariam','gaga');

COMMIT;