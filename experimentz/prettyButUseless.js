const customerInfo = {}

const lostTest = {
    'Navigate to account settings to get company name and address for order': browser => {
        //this could be made  custom command if we wanted to re-use
        headerModules(browser).click('@yourAccountDropDown').click('@settingsOption')
        accountSettings(browser).assert.urlContains('account/settings')
        accountSettings(browser).getText('@companyNameValue', function (result) {
            customerInfo.companyName = result.value
        })
        let contactInfo = ['@address1Value', '@address2Value', '@cityValue', '@stateValue', '@zipCodeValue', '@countryValue']
        contactInfo.forEach(function (element) {
            accountSettings(browser).getValue(element, function (result) {
                // the .slice() here captures the value from the first index to the 5th from last index of the string,
                // removing the @ and Value in the process, to get a valid property for customerInfo object.
                let property = element.slice(1, -5)
                customerInfo[property] = result.value
            })
        })
    }
}