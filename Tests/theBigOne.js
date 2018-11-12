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
        enterWanted.navigate()
        modifyWantedPageObject = browser.page.modifyWantedPageObjects()
        modifyWantedPageObject.navigate()
        cancelWantedPageObjects = browser.page.cancelWantedPageObjects()
        cancelWantedPageObjects.navigate()

    }
}