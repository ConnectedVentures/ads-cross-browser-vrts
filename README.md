# Gemini-Browserstack VRTs

This project can be used to run cross-browser visual regression tests on a base set of Fresh8 products.

The tests run with Gemini, using a tunnel to Browserstack through a Gemini plugin. It also spits out a html report. Currently, the tests are only configured to run locally, against a set of ads on staging.

## Running the tests

When running the tests for the first time, you will require golden images to compare with. These are stored in this GCP bucket gs://bruce-vrt-test-testing/cross-browser/

You can download the golden images to the correct folder in the project using the command

```
npm run download-golden
```

Next, to run the test simply use the command

```
gemini test
```

To update the golden images locally, use the command

```
gemini update
```

You can then upload these to the bucket using the command

```
npm run upload-golden
```

Alternatively, you can run the update and upload together with the command

```
npm run update-golden
```

Please be aware that the golden images must be kept as much as possible to the ideal state of the ads. Therefore, do not update the golden images if they contain visual bugs until the bugs are resolved, if you can avoid. Other people may be using the golden images, assuming they are representative of the ideal state. Use personal judgement tho.

## Configuring for Browsers

The tests can be made to run with different browsers, operating systems and versions of both through Browserstack. These options live in the .gemini.js file in the root of this project, for example:

```
browsers: {
        chrome: {
            desiredCapabilities: {
                "os": "Windows",
                "os_version": "10",
                "browserName": "Chrome",
                "version": "62.0",
                "resolution": "1280x800"
            }
        }
    }
```
There is a UI on Browserstack for helping to write this in the correct format, with some differences for the gemini-browserstack package used, for example browser -> browserName; browser_version -> version. Documentation for the available browser capabilities can be found here https://www.browserstack.com/automate/wd#run-tests-on-desktop-mobile

After running a test, you can visit https://automate.browserstack.com/ while logged into the tech account to see how long the tests take, logs, and a video of the test.