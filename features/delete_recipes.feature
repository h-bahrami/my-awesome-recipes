Feature: Recipe deletion

    User can delete a recipe any time

    Scenario: User deletes a recipe
        Given At least on recipe exists in the list
        And user presses the adjacent red button
        Then UI will prompt user to confirm the operation
        And if user confirms
        Then a DELETE request will be send to the backend
        And if server is up and running
        Then recipe will be removed
        And User will be aknowledged

    Scenario: User presses delete button by mistake
        Given At least on recipe exists in the list
        And user presses the adjacent red button
        Then UI will prompt user to confirm the operation
        Then user can cancel the operation
        And nothing happens


