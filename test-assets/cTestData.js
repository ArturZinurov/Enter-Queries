module.exports = {
    validTerms: [{
        warrantId: '1234567891',
reasonForCanellation: '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890qwertuyiop12345678901234567890123456789012345@#FUK',
dateOfCancelation: '12311969',
output: 'Valid',
resultsSelector: '@queryTitle',
results: '1234567891.1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890qwertuyiop12345678901234567890123456789012345@#FUK.12311969'
    }],
    invalidTerms: [{
        warrantId: '123465',
        reasonForCanellation: '0',
        dateOfCancelation: '-9',
        output: 'Errors Received:',
resultsSelector: '@queryTitle',
results: '@error'
    }]
}