module.exports = (enterWantedPageObjects, warrant) => {
    enterWantedPageObjects
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
    enterWantedPageObjects
        .api.elements('span[name="queryBody"]', function (results) {
            if (results.len > 0) {
                enterWantedPageObjects
                    .expect.element('@error')
                console.log(results)
            } else {

                enterWantedPageObjects
                    .expect.element('@queryBody').text.to.equal(warrant.results).before(500)
            }
        })
}