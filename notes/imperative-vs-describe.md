#IMPERTITIVE- all clicks are defined

Feature: Test
When I click the username  field
And I type "standard_user"
And I click on password field
And I type "secret_sauce"

#Declarative
Feature: Test2
Given I am on login page
When I enter "standard_user" in username field 
And  I enter "secret_sauce" in password field 
Then my login is successful
But I am not returned to full catalogue access page


