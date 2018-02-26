var mysql = require("mysql");
var inquirer = require("inquirer");
require('dotenv').config();

//creating sql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    else {
        readItems();
    }
});

//essentially a start function, showing items for sale
var readItems = () => {
  itemsInquiry();
}


//allows user to input what item they would like to purchase
var itemsInquiry = () => {
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the item you would like to buy?"
            },
            { 
                name: "quantity",
                type: "input",
                message: "How many would you like to buy?"
            }
        ]).then(function (answer){
            var chosenItem = answer.item;
            var chosenQuantity = answer.quantity;
            checkStock(chosenItem, chosenQuantity);
            
        });
}

//checks stock column. if quantity of items user would like 
//to purchase is available, run purchase and update stock 
//functions.  
var checkStock = (item, quantity) => {
//query item in database
    connection.query("SELECT product_name, stock_quantity, price FROM product WHERE ?", 
                [{product_name:item}], function (err, results) {
        if (err) throw err;
        console.log(results);
        if (quantity > results[0].stock_quantity){
            console.log("Sorry, we dont have enough");
            readItems();
        } else {
            giveTotal(item, quantity);
        }
    //giveTotal();
    //buyItem();
    
    }); 
}

//provides price total of items to be purchased before
//being bought 
var giveTotal = (item, quantity) => {

    connection.query("SELECT price FROM product WHERE ?", [{ product_name: item }], function (err, results) {
        if (err) throw err;
        console.log("the total will be: " + (results[0].price * quantity));
        buyItem(item, quantity);
    }); 
}

//prompts user to buy the item if its available
var buyItem = (item, quantity) => {
    //take current quantity, and subtract what they want to purchase
    
    //run a new select query with quantity, and subtract with new value
    updateStock(item, quantity);
hjx }

//update request to database, removing purchased stock
var updateStock = (item, newQuantity) => {
    connection.query(
        "UPDATE product SET ? WHERE ?",
        [
            {
                stock_quantity: newQuantity 
            },
            {
                product_name: item
            }
        ],
        function(err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            buyAnother();
          }
        );
      
        // logs the actual query being run
        console.log(res);
      }
    


var buyAnother = function(){
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "Would you like to buy another item?"
            }
        ]).then(function (answer){
            readItems()
        });
    
} 

