gemini.suite('MPU', (suite) => {
    suite.setUrl('https://preview.fresh8.co/creative/type/MPU_Event-List-1-0?operator=fresh8&brand=fresh8&sport=Football&country-code=en-gb&f8-frame=widget')
        .setCaptureElements('.MPU_Event-List-1-0')
        .capture('plain');
});