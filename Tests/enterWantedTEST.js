var EWtestData = require('../test-assets/EWtestData')
var fillOutFormE = require('../test-assets/enterWantedfunc')
var enterWanted = {}

module.exports = {
    beforeEach: browser => {
        enterWanted = browser.page.enterWantedPageObject()
        enterWanted.navigate()

    },
    after: function (browser) {
        browser.end()
    },
    'Valid Entry': () => {
        EWtestData.validTerms.forEach(test => {
            fillOutFormE(enterWanted, validEntry)
        })

    },
}