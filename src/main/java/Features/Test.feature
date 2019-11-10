Feature: Test Automation Practice application

Scenario Outline: Login to Automation Practice application
Given Chrome browser is Opened
When Automation Practice application is launched
And User navigates to Sign in page named "Sign in page"
And User enters valid credentials "<username>" and "<password>"
Then User should be able to log into application
Examples:
| username 		| password |
| mohitpugrani  | mohithp  |
| dalesteyn     | dalesty  | 