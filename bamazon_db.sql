DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product VARCHAR(300) NOT NULL,
department VARCHAR(300) NOT NULL,
price DECIMAL(10,2) NULL,
quantity INT NULL
);


INSERT INTO products (product, department, price, quantity)
VALUES ("Millenium Falcon", "Lego", 800, 5);

INSERT INTO products (product, department, price, quantity)
VALUES ("Death Star", "Lego", 500, 10);

INSERT INTO products (product, department, price, quantity)
VALUES ("Sandcrawler", "Lego", 140, 20);

INSERT INTO products (product, department, price, quantity)
VALUES ("Firehouse Headquarters", "Lego", 350, 15);

INSERT INTO products (product, department, price, quantity)
VALUES ("Alexander Mcqueen Scarf", "Accessories", 525, 25);

INSERT INTO products (product, department, price, quantity)
VALUES ("Alexander Mcqueen Padlock Bag", "Accessories", 1500, 5);

INSERT INTO products (product, department, price, quantity)
VALUES ("Alexander Mcqueen Hobnail Angle Boot", "Accessories", 1300, 20);

INSERT INTO products (product, department, price, quantity)
VALUES ("Gemini Cessna Skyhawk 172 1:72 Diecast Model", "Aircraft Model", 55, 50);

INSERT INTO products (product, department, price, quantity)
VALUES ("Gemini Southwest 737 Max8 1:400", "Aircraft Model", 45, 30);

INSERT INTO products (product, department, price, quantity)
VALUES ("Gemini Skywest Bombardierr CRJ 700 1:400", "Aircraft Model", 110, 45);


