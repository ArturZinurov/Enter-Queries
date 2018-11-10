module.exports = {
    validTerms: [{
        warrantId: '1234567891',
        header: '123456789',
        mke: "MKE",
        originatingAgency: "CHI123456",
        name: "Harry Dresden",
        sex: "M",
        race: "W",
        height: "611",
        weight: "200",
        hair: "Black",
        offense: "Arson",
        dateOfWarrant: "10312017",
        output: "Valid",
        resultsSelector: "@queryTitle",
        results: "1234567891.123456789.MKE.CHI123456.Harry Dresden.M.W.611.200.Black.Arson.2017-10-31......"

    }],
    invalidTerms: [{
        warrantId: '123',
        header: '123456789L',
        mke: "MKE65",
        originatingAgency: "0123CHI123456",
        name: "Ha",
        sex: "L",
        race: "X",
        height: "11",
        weight: "00",
        hair: "B",
        offense: "A",
        dateOfWarrant: "312017",
        output: "Errors Received:",
        resultsSelector: "@queryTitle",
        results: "@error"
    }]
}
