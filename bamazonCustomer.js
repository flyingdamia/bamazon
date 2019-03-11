// Dependencies //
var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");


// SQL Credentials //
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;


    products();
});

// Function to List all Products //
function products() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        console.log('');
        console.log('-------------Inventory---------------');
        console.log('');


        for (var i = 0; i < res.length; i++) {
            console.log('Item ID: ' + res[i].id);
            console.log('Product: ' + res[i].product);
            console.log('Department: ' + res[i].department);
            console.log('Price: ' + res[i].price);
            console.log('Quantity Left: ' + res[i].quantity);
            console.log("\n\r");


        }

        start();
    });
}

// Function to interact with user via Inquirer //
function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw console.log("connection error:" + err);
        inquirer
            .prompt([
                {
                    name: 'Id',
                    type: 'input',
                    message: 'Enter the Item ID:',


                },

                {
                    name: 'Qpurchased',
                    type: 'input',
                    message: 'How many would you like?',
                }
            ]).then(function (answers) {
                var query = "SELECT * FROM products WHERE ?";
                connection.query(query, {
                    id: answers.Id
                }, function (err, res) {




                    var stocked = res[0].quantity;
                    var purchasedItem = answers.Qpurchased;

                    if (stocked >= purchasedItem) {
                        var itemsLeft = stocked - purchasedItem;

                        var totalPrice = res[0].price * purchasedItem;
                        var purchased = res[0].product;



                        connection.query(
                            "UPDATE products SET ? WHERE ?", [
                                {
                                    quantity: itemsLeft

                                },
                                {
                                    id: answers.Id
                                }

                            ],
                            function (error) {

                                if (error) throw err;
                                console.log("==============================================");
                                console.log("\n\r");
                                console.log("Order details:");
                                console.log("Item:" + purchased);
                                console.log("Quantity:" + " " + purchasedItem + " for $" + res[0].price + " " + "ea.");
                                console.log("Total Cost: $" + totalPrice);
                                console.log("\n\r");
                                console.log("Thank you for your business.");
                                console.log("==============================================");

                                // Logging all purchases to log.txt //

                                var output = ("==============================================" + "\n\r" + "Order details:" + "\n ================" + "\n Item:" + purchased + "\n Quantity:" + " " + purchasedItem + " for $" + res[0].price + " " + "ea." + "\n Total Cost: $" + totalPrice + "\n\r" + "Thank you for your business." + "\n\r");
                                fs.appendFile('log.txt', output, 'utf8', function (error) {
                                    if (error) {
                                        console.log("Couldn't write.")
                                    }

                                })



                            }
                        );
                        // If not enough in stock //
                    } else {
                        console.log("==============================================");
                        console.log("\n\r");
                        console.log("Not enough product to fulfill request");
                        console.log("\n\r");
                        console.log("==============================================");


                    }

                });

            });
    });
}