Feature: Login 


Background:
        Given User is on sign-in page
    Scenario: Successful login
        When  User selects sign-in
        And   User enters correct credentials
        Then  User successfully logged into platform
    Scenario: Unsuccessful login
        When  User selects sign-in
        And   User enters incorrect credentials
        Then  User receives error message "Wrong email or password"