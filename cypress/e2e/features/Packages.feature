Feature: Packages


Background:
        Given User has logged in 
    Scenario: Create new package (from template)
        And   User navigated to packages screen
        When  User selects Create new package
        And   User selects template option
        And   User continues package flow row1
        Then  User successfully created new package 
    Scenario: Create new package (custom)
        And   User navigated to packages screen
        When  User selects Create new package
        And   User selects "Create my own" template option
        And   User continues package flow row2
        Then  User successfully created new package