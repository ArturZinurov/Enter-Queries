var EWtestData = require('../test-assets/EWtestData')
var enterWantedFunc = require('../test-assets/enterWantedfunc')
var enterWanted = {}
var testDataModify = require('../test-assets/mTestData')
var modifyWantedFunc = require('../test-assets/modifyWantedFunc')
var modifyWantedPageObject = {}
var cancelTestData = require('../test-assets/cTestData')
var cancelFunc = require('../test-assets/cancelWantedFunc')
var cancelWantedPageObjects = {}

module.exports = {
    beforeEach: browser => {
        enterWanted = browser.page.enterWantedPageObjects()
        // enterWanted.navigate()
        modifyWantedPageObject = browser.page.modifyWantedPageObjects()
        // modifyWantedPageObject.navigate()
        cancelWantedPageObjects = browser.page.cancelWantedPageObjects()
        // cancelWantedPageObjects.navigate()

    },
    after: function (browser) {
        browser.end()

    },
    'Valid Entry ENTER': () => {
        enterWanted.navigate()
        EWtestData.validTerms.forEach(test => {
            enterWantedFunc(enterWanted, test)
        })

    },
    'Invalid Entry ENTER': () => {
        enterWanted.navigate()
        EWtestData.invalidTerms.forEach(test => {
            enterWantedFunc(enterWanted, test)
        })
    },
    'Valid Entry MODIFY': () => {
        modifyWantedPageObject.navigate()
        testDataModify.validTerms.forEach(test => {
            modifyWantedFunc(modifyWantedPageObject, test)

        })

    },
    'Invalid Entry MODIFY': () => {
        modifyWantedPageObject.navigate()
        testDataModify.invalidTerms.forEach(test => {
            modifyWantedFunc(modifyWantedPageObject, test)
        })
    },
    'Valid Entry CANCEL': () => {
        cancelWantedPageObjects.navigate()
        cancelTestData.validTerms.forEach(test => {
            cancelFunc(cancelWantedPageObjects, test)
        })
    },
    'Invalid Entry CANCEL': () => {
        cancelWantedPageObjects.navigate()
        cancelTestData.invalidTerms.forEach(test => {
            cancelFunc(cancelWantedPageObjects, test)
        })
    }

}