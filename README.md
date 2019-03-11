# Bamazon

# Description

This is a command line app along utilizing npm packages inquirer and MySQL to present a customer GUI

# My SQL Setup

To use this app, you need MySQL database. Create the Bamazon database and the products table with the SQL code found in Bamazon.sql. 

# Customer Interface

The user can view the current inventory of store items, the department in which the item is located and price. You can purchase an item by entering the item ID and the desired quantity as long as we have that quantity in stock. The total purchase price will be shown and the database will be updated to show the new stock quantity. If the stock is unavailable, the user is prompted not enough stock.

To run the customer interface please follow the steps below:

git clone https://github.com/flyingdamia/bamazon.git

cd bamazon

npm install

node bamazonCustomer.js