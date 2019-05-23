module.exports = {
    rootUrl: 'https://preview.fresh8.co/',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',


    browsers: {
        chrome: {
            desiredCapabilities: {
                "os": "Windows",
                "os_version": "10",
                "browserName": "Chrome",
                "version": "62.0",
                "resolution": "1280x800"
            }
        },
        ie11: {
            desiredCapabilities: {
                "os": "Windows",
                "os_version": "10",
                "browserName": "IE",
                "version": "11.0",
                "resolution": "1280x800"
            }
        }
    },
    system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                defaultView: 'all'
            },
            'browserstack': {
                username: 'andrew138',
                accessKey: 'ENas1kvrWT6WZeUFvg7g'
            }
        }
    }
};