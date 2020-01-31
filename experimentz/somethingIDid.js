const inventoryCleanUp = new m_inventoryCleanUpAPI("REG");

let productsNotInStore = null
let numOfProductsToDelete = null
let productsToDelete = null
let skusToDelete = []

const assert = require('assert');

// to run this test in order to delete products, move into folder: m_deleteProducts and run from there, 
// then, move it back into this folder

module.exports = {

    // this test is incomplete, tests before and after what i wrote have been removed //

    'Search products via API to create array of items NOT IN store': async (browser) => {
        await inventoryCleanUp.getAuth(username, password).then(response => {
            return response.data.access_token
        }).then(token => {
            return inventoryCleanUp.searchInventory(token)
        }).then(response => {
            productsNotInStore = response.data.results.filter(product => product.inventory.length === 0)
            numOfProductsToDelete = Math.floor(productsNotInStore.length / 10)
            console.log('Number of products not in Store: ', productsNotInStore.length, 'Number of products to be deleted: ', numOfProductsToDelete)
            productsToDelete = productsNotInStore.slice(0, numOfProductsToDelete)
            return productsToDelete
        }).then(productsToDelete => {
            skusToDelete = productsToDelete.map(product => {
                return product.sku
            })
            return skusToDelete
        }).catch(err => console.log('ERROR: ', err))

        console.log('Pausing to ensure API call completes...')
        browser.pause(15000)
    },

    'Log array of items to be deleted to the console': () => {
        console.log('SKUS TO BE DELETED: ', skusToDelete)
    },

    'Get Other auth and delete items from inventory': async (browser) => {
        if (productsNotInStore.length > 50) {
            const data = {
                parameters: {
                    merchantId: email,
                    skus: skusToDelete
                }
            }
            await inventoryCleanUp.getOtherAuth().then(otherToken => {
                inventoryCleanUp.deleteInventory(otherToken, data)
            }).catch(err => console.log('ERROR: ', err))

            console.log('Pausing to ensure API call completes...')
            browser.pause(15000)
            browser.refresh()
        }
    },

    // tests after also deleted //
}