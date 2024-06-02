# npx playwright test example // to run files which contains name example

# npx playwright test -g "test description" // It will run all tests which have that description

# npx playwright test --project=chromium --headed // to run in headed mode

# npx playwright test --project=chromium --debug // In debug mode, it will always run in headed mode

# npx playwright test ./tests/example.spec.js:11 --project=chromium --debug  // run test case from line number 11

# npx playwright codegen --browser firefox // by default it is chromium

# npx playwright codegen --target javascript -o ./tests/path

# npx playwright codegen --viewport-size=800,600

# npx playwright codegen --device='iPhone 7' // to emulate in particular device

# npx playwright codegen --color-scheme=dark playwright.dev // to open in dark mode

# npx playwright codegen --help

# npx playwright show-trace trace.zip

# npx playwright show-trace --trace on // "on-first-retry" on off "retain-on-failure"
# retain-on-failure - It only shows failed test runs

# trace.playwright.dev - upload zip file to see trace

# ctrl + F => to open search in inspect window
# expect.soft() soft assertion - do not terminate test execution, but will mark the test as failed

# --grep " " => to run those test which have the given tag
# --grep-invert => opposite of grep skip tests, it will skip the given tag in grep

# npx playwright test -ui => to open playwright ui and run test on selecting particular test

