module.exports = {
    url: 'http://localhost:3000/#/enter',
    elements: {
        header: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        originatingAgency: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'select[name="sexInput"]',
        race: 'select[name="racInput"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        dateOfWarrant: 'input[name="dowInput"]',
        oln: 'input[name="olnInput"]',
        olState: 'input[name="olsInput"]',
        olExpiration: 'input[name="olyInput"]',
        plate: 'input[name="licInput"]',
        plateState: 'input[name="lisInput"]',
        plateExpiration: 'input[name="liyInput"]',
        submit: {
            selector: '//button[text()=" Submit "]',
            locateStrategy: 'xpath'
        },
        clear: '#clearBtn',
        output: 'h4[id="validHeader"]',
        queryTitle: 'span[name="queryTitle"]',
        queryBody: 'span[name="queryBody"]',
        error: '#errorList'
    }
}