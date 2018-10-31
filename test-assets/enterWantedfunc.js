module.exports = (enterWantedPageObjects) => {
    enterWantedPageObjects
        .setValue('@headerInput', header)
        .setValue('@mkeInput', mke)
        .setValue('@originatingAgencyInput', originatingAgency)
        .setValue('@nameInput', name)
        .setValue('@sexInput',sex)
        .setValue('@raceInput',race)
        .setValue('@heightInput',height)
        .setValue('@weightInput', weight)
        .setValue('@hairInput', hair)
        .setValue('@offenseInput', offense)
        .setValue('@dateOfWarrantInput', dateOfWarrant)
        .click('@submitButton')
        .expect.element('@outputHeader').text.to.equal(outputHeader).before(100000)
        enterWantedPageObjects
        .expect.element(resultsSelector).text.to.equal(results)
}