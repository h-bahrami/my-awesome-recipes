Feature: Modify an existing recipes

    user selects a recipe from the list and modifys it.

    Scenario: Successfull modification
        Given At least and item exists in the list
        And User presses the adjacent blue button
        When A drawer window opened
        And user editted the data
        And pressed submit button
        And Backend service is up and running
        Then Data will be submitted to the Backend
        And user will be aknowledged

    Scenario: Unsucessfull modification
        Given At least and item exists in the list
        And User presses the adjacent blue button
        When A drawer window opened
        And user editted the data
        And pressed submit button
        And Backend service status is unknown
        Then Data will be submitted to the Backend
        And user will be aknowledged
        And Data will be saved localy

    Scenario: Modifying an item which has local update
        Given At least and item exists in the list
        And a local version of data update exists
        And User presses the edit button
        When Edit window will be opened
        And user will be prompted that previous update values filled in the from
        And will be asked to continue will cached value or to discard them
        Then UI will function accordingly



