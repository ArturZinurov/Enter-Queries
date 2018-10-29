modify.exports = (enterWanted, warrantInfo) => {
    enterWanted
        .setValue('@headerInput', warrantInfo.header)
        .setValue('@mkeInput', warrantInfo.mke)
        .setValue('@originatingAgencyInput', warrantInfo.originatingAgency)
        .setValue('@nameInput', warrantInfo.name)
        .setValue('@sexInput', warrantInfo.sex)
        .setValue('@raceInput', warrantInfo.race)
        .setValue('@heightInput', warrantInfo.height)
        .setValue('@weightInput', warrantInfo.weight)
        .setValue('@hairInput', warrantInfo.hair)
        .setValue('@offenseInput', warrantInfo.offense)
        .setValue('@dateOfWarrantInput', warrantInfo.dateOfWarrant)
        .click('@submitButton')
        .expect.element('@outputHeader').text.to.equal(warrantInfo.outputHeader).before(100000)
    enterWanted
        .expect.element(warrantInfo.resultsSelector).text.to.equal(warrantInfo.results)
}