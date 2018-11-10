var testDataModify = require('../test-assets/mTestData')
var modifyWantedFunc = require('../test-assets/modifyWantedFunc')
var modifyWantedPageObject = {}

module.exports = {
    beforeEach: browser => {
        modifyWantedPageObject = browser.page.modifyWantedPageObjects()
        modifyWantedPageObject.navigate()
    },
    after: function (browser) {
        browser.end()
    },
    'Valid Entry': () => {
        testDataModify.validTerms.forEach(test => {
            modifyWantedFunc(modifyWantedPageObject, test)
            
        })

    }, 
    'Invalid Entry': () => {
        testDataModify.invalidTerms.forEach(test => {
            modifyWantedFunc(modifyWantedPageObject, test)
        })
    }

}