var EWtestData = require('../test-assets/EWtestData')
var fillOutFormE = require('../test-assets/enterWantedfunc')
var enterWanted = {}

module.exports = {
    beforeEach: browser => {
        enterWanted = browser.page.enterWantedPageObjects()
        enterWanted.navigate()

    },
    after: function (browser) {
        browser.end()
    },
    'Valid Entry': () => {
        EWtestData.validTerms.forEach(test => {
            fillOutFormE(enterWanted, test.validTerms)
        })

    },
}