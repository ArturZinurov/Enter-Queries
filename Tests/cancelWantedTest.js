var cancelTestData = require('../test-assets/cTestData')
var cancelFunc = require('../test-assets/cancelWantedFunc')
var cancelWantedPageObjects = {}

module.exports = {
    beforeEach: browser => {
        cancelWantedPageObjects = browser.page.cancelWantedPageObjects()
        cancelWantedPageObjects.navigate()
    },
    after: function (browser) {
        browser.end()

    },
    'Valid Entry' : () => {
        cancelTestData.validTerms.forEach(test => {
            cancelFunc(cancelWantedPageObjects, test)
        })
    },
    'Invalid Entry' : () => {
        cancelTestData.invalidTerms.forEach(test => {
            cancelFunc(cancelWantedPageObjects, test)
        })
    }
}