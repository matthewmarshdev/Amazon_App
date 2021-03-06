CREATE database bamazon;

DROP DATABASE IF EXISTS bamazon;

USE bamazon;

CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(60) NOT NULL,
  department_name VARCHAR(60) NOT NULL,
  price DECIMAL (10, 4) NOT NULL,
  stock_quantity INT (4) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO product ( product_name, department_name, price, stock_quantity)
VALUES ('fantasywave', 'trap_vidz', 24.99, 167);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('zelda_plushie', 'toys', 21.99, 600);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('link_plushie', 'toys', 21.99, 589);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('simpsonwave_vol_4', 'trap_vidz', 1364.00, 5);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('trappin_in_japan_anthology', 'set', 999.00, 7);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('furry_headband', 'clothing', 24.89, 50);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('rick_drool_shirt', 'clothing', 23.24, 43);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('homer_sprinkle_donut', 'clothing', 12.99, 400);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('simpsonwave_package', 'set', 9999.99, 3);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('rickwave_package', 'set', 7999.99, 3);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('tokyo_bus_pass', 'collectable', 199.99, 15);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ('all_trapz_kit', 'set', 69999.99, 1);



SELECT * FROM product;

SELECT * FROM product WHERE department_name = 'toys';