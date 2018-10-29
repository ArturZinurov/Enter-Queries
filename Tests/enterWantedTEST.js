var EWtestData = require('../test-assets/EWtestData')
var fillOutFormE = require('../test-assets/enterWantedfunc')
var enterWanted = {}

module.exports = {
    beforeEach: browser => {
        enterWanted = browser.page.enterWantedPageObject()
        enterWanted
            .navigate()
            .assert.visible('@mkeInput')
    },
    after: function (browser) {
        browser.end()
    },
    'Valid Entry': () => {
        let validEntry = { header: '123456789', mke: "MKE", originatingAgency: "CHI123456", name: "Harry Dresden", sex: "M", race: "W", height: "611", weight: "200", hair: "Black", offense: "Arson", dateOfWarrant: "10312017", outputHeader: "Valid", resultsSelector: "@queryBody", results: "123456789.MKE.CHI123456.Harry Dresden.M.W.611.200.Black.Arson.10312017......" }
        fillOutFormE(enterWanted, validEntry)
    },
}