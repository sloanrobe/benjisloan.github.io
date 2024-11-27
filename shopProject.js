const { input } = require('@inquirer/prompts')

const products = [{
    productName: 'Apples',
    quantity: 5
}, {
    productName: 'Bananas',
    quantity: 12
}, {
    productName: 'Oranges',
    quantity: 8
}, {
    productName: 'Avocados',
    quantity: 4
}]

async function showIntro() {
    let intro = "Welcome to The Shop!  Here is a list of products in stock:"
    console.log(intro)
    console.log('-'.repeat(intro.length))
}

async function showProducts() {
    products.forEach(product => console.log(product))
}

function formatInput(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

async function askForInput() {
    const foodOrder = await input({ message: 'What product would you like to order?'})
    return foodOrder
}

async function validateInput(foodOrder) { 
   /*  foreach loop / product.productName */
    const formattedOrder = formatInput(foodOrder)
    const productNames = ['Apples', 'Bananas', 'Oranges', 'Avocados']
    if (!productNames.includes(formattedOrder)) {
        console.log('The requested product does not exist.')
      } else {
        console.log('The requested product is available.')
        /* return true */
      }
    products.forEach(products => {
        if (products.productName === formattedOrder) {
            if (products.quantity > 0) {
                products.quantity -= 1;
                console.log(`One ${formattedOrder} has been ordered.  Remaining quantity: ${products.quantity}.`)
            } else {
                console.log(`Sorry - ${formattedOrder} are out of stock.`)
            }
        }
    })
}

async function askForQuantity(productName) {
    const quantity = await number({
        message: `How many ${productName} would you like to order?`,
        validate: (value) => (value > 0 ? true : 'Please enter a positive number.')
    });
    return quantity;
}

const requestedQuantity = askForQuantity(formattedOrder)

if (requestedQuantity > product.quantity) {
    console.log(
        `Sorry, we only have ${product.quantity} ${formattedOrder}(s) in stock.`
    );
} else {
    product.quantity -= requestedQuantity;
    console.log(`You have ordered ${requestedQuantity} ${formattedOrder}(s). Remaining quantity: ${product.quantity}.`);
}

async function startShop() {
    showIntro()
    showProducts()
    const userInput = await askForInput()
    validateInput(userInput)
}

startShop()

/* List quantities of items in the store
Include lowercase functionality
Follow up question if product is available.  How many do you want?
Deduct the user quantity input from the inventory
Ask user if they would like to order anything else, and repopulate the inventory list */