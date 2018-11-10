module.exports = (cancelWantedPageObjects, warrant) => {
    cancelWantedPageObjects
        .setValue('@warrantId', warrant.warrantId)
        .setValue('@reasonOfCancelatioin', warrant.reasonOfCancelatioin)
        .setValue('@dateOfCancelation', warrant.dateOfCancelation)
        .click('@submit')
        .expect.element('@output').text.to.equal(warrant.output).before(500)
        cancelWantedPageObjects
        .api.elements('span[name="queryBody"]', function (results) {
                if (results.len > 0) {
                    cancelWantedPageObjects
                        .expect.element('@error')
                    console.log(results)
                } else {

                    cancelWantedPageObjects
                        .expect.element('@queryBody').text.to.equal(warrant.results).before(500)
                }
            })
        }
