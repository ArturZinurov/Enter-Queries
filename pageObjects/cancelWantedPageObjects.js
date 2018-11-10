module.exports = {
    url: "http://localhost:3000/#/cancel",
    elements: {
        warrantId: 'input[name="widInput',
        reasonOfCancelatioin: 'input[name="resInput"]',
        dateOfCancelation: 'input[name="datInput"]',
        submit: {
            selector: '//button[text()=" Submit "]',
            locateStrategy: 'xpath'
        },
        clear: '#clearBtn',
        output: '#validHeader',
        queryTitle: 'span[name="queryTitle"]',
        queryBody: 'span[name="queryBody"]',
        error: '#errorList'
    }
}