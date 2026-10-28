Feature:Login

Background:
Given I am on the login page
@smoke
Scenario Outline: Valid users reach the catalogue
#Given I am on the login page
When I login as credentials "<username>"
Then catalogue is displayed

Examples:
| username                |
| standard_user           |
| problem_user            |
| performance_glitch_user | 

@functional
Scenario Outline: Invalid users dont reach the catalogue
#Given I am on the login page
When I enter the "<username>" with "<password>"
Then they see "<outcome>"

Examples:
| username        | password     | outcome                                                                   |
| standard_user   | secret_sauce | Products                                                                  | 
|                 | wrong_pass   | Epic sadface: Username is required                                        |
| locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
| standard_user   | secret       | Epic sadface: Username and password do not match any user in this service |



