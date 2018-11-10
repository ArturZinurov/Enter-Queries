module.exports = (modifyWantedPageObjects, warrant) => {
    modifyWantedPageObjects
        .setValue('@warrantId', warrant.warrantId)
        .setValue('@header', warrant.header)
        .setValue('@mke', warrant.mke)
        .setValue('@originatingAgency', warrant.originatingAgency)
        .setValue('@name', warrant.name)
        .setValue('@sex', warrant.sex)
        .setValue('@race', warrant.race)
        .setValue('@height', warrant.height)
        .setValue('@weight', warrant.weight)
        .setValue('@hair', warrant.hair)
        .setValue('@offense', warrant.offense)
        .setValue('@dateOfWarrant', warrant.dateOfWarrant)
        .click('@submit')
        .expect.element('@output').text.to.equal(warrant.output).before(500)
    modifyWantedPageObjects
        .api.elements('span[name="queryBody"]', function (results) {
            if (results.len > 0) {
                modifyWantedPageObjects
                    .expect.element('@error')
                console.log(results)
            } else {

                modifyWantedPageObjects
                    .expect.element('@queryBody').text.to.equal(warrant.results).before(500)
            }
        })
}