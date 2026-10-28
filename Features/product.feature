Feature:Product Addition

Scenario Outline: Adding several products in cart
  Given the user is on login page 
  When the user signs in with "standard"
  And they add the following products
        | product               | quantity |
        | Sauce Labs Backpack   | 1        |
        | Sauce Labs Bike Light | 1        |

    Then the cart badge shows "2"