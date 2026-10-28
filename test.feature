Feature:Login
As a shopper 
I want to Login
so that I can place the prder.

Scenario: Login with valid credentials
Given I am launching the shopping website
When  I login as "standdard user"
Then I am land on inventory page

Scenario: Login with invalid credentials
Given I am launching the shopping website
And I am on the Login page
When I login as  a "locked_out" user
Then an error message is displayed
And product catalogue is not shown