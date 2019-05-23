const tests = require('./standard6List.json');
const brand = 'fresh8';
console.log(`Running Standard 6 tests with the brand ${brand}...`)

tests.forEach(test => {
    gemini.suite(`${test.config}`, (suite) => {
        suite.setUrl(createLink(test.config, brand, test.sport))
            .setCaptureElements(`.${test.config}`)
            .capture('plain', function (actions) {
                actions.waitForElementToShow(`.${test.config}`, 10000)
            });
    });
});

function createLink(config, brand, sport) {
    return "https://preview-staging.fresh8.co/creative/type/" + config + "?operator=fresh8&brand=" + brand + "&sport=" + sport + "&country-code=en-gb&f8-frame=widget";
}
