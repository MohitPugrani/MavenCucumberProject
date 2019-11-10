Feature: Test Automation Practice application

Scenario: Login to Automation Practice application
Given Chrome browser is Opened
When Automation Practice application is launched
And User navigates to Sign in page named "Sign in page"
And User enters valid username and password
| username     | password |
| mohitpugrani | mohithp  |
Then User should be able to log into application
 