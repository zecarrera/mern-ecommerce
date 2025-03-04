npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

Run tests in headed mode (see the browser):
npx playwright test --headed

Run a specific test file:
npx playwright test tests/example.spec.ts

Run a single test:


npx playwright test -g "has title"


View the Report: After the tests finish, Playwright will generate an HTML report. You can open it to see the results.
npx playwright show-report
